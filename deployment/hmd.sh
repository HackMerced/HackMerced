#!/bin/bash

#
# HackMerced Deployment Script
#

# Useful functions
get_unix_timestamp() {
	echo "$(date +'%s')"
}
log() {
	if [[ $1 == "e" ]]; then 
		local LEVEL=ERROR
	elif [[ $1 == "i" ]]; then 
		local LEVEL=INFO
	elif [[ $1 == "w" ]]; then
		local LEVEL=WARN
	fi
	echo "$(TZ=":America/Los_Angeles" date): $LEVEL $2" | tee -a "$HMD_LOG"
}
die() {
	log e "Script failed"
	exit 0
}

# Check for branch name in argunment
if [[ ! $BRANCH ]]; then
	log i "Branch not specified in env vars" && die
fi

log i "START -- Running hackmerced deployment script on branch: $BRANCH"

# Set up some vars
PROC="hackmerced_$BRANCH"
REPO_LOC="/opt/$PROC"
REPO_LOC_SERVER="$REPO_LOC/server/"
REPO_LOC_CLIENT="$REPO_LOC/client/"
HMD_LOCK="$REPO_LOC/hmd.lock"

# While lock is not held
START_TIME=$(get_unix_timestamp)
while [ -f $HMD_LOCK ]; do
	sleep 120
	CURR_TIME=$(get_unix_timestamp)
	# Check for timeout
	if [ $(( CURR_TIME - START_TIME )) -gt 480 ]; then
		log e "Timeout occured while waiting for a previous instance of the process complete or the lock file needs to be reset" && die
	fi
done

# Lock is available and timeout has not occured, acquire it
touch $HMD_LOCK && log i "Acquiring lock file.."

# Stop pm2
env HOME=$PM2_ENV pm2 stop $PROC && log i "Stopping pm2 $PROC process"

# Remove old repo files
rm -rf "$REPO_LOC/{*,.*}" && log i "Clearing old repo files"

# Clone new repo files
git clone -b $BRANCH git@github.com:HackMerced/HackMercedf18.git $REPO_LOC && log i "Cloning new repo to $REPO_LOC"

# Install node dependencies
npm --prefix $REPO_LOC_SERVER install $REPO_LOC_SERVER && log i "Installing server node dependencies"
npm --prefix $REPO_LOC_CLIENT run build $REPO_LOC_CLIENT && log i "Installing client node dependencies"

# Start pm2
env HOME=$PM2_ENV pm2 start $PROC --update-env && log i "Restarting pm2 $PROC processs"

# Free lock file
rm $HMD_LOCK && log i "Freeing lock file.."

log i "END -- Repo update complete"
