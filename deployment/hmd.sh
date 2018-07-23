#!/bin/bash
# Useful functions
get_unix_timestamp() {
	echo "$(date +'%s')"
}

log() {
	echo "$(date): $1" | tee -a "$HMD_LOG"
}

die() {
	echo "$(date): Script failed" | tee -a "$HMD_LOG"
	exit 0
}
# Check for branch name in argunment
if [[ ! $BRANCH ]]; then
	log "Branch not specified in env vars" && die
fi
log "Running hackmerced deployment script on branch: $BRANCH"
# While lock is not held
START_TIME=$(get_unix_timestamp)
while [ -f /root/hmd.lock ]; do
	sleep 120
	CURR_TIME=$(get_unix_timestamp)
	# Check for timeout
	if [ $(( CURR_TIME - START_TIME )) -gt 480 ]; then
		log "Timeout occured while waiting for a previous instance of the process complete or the lock file needs to be reset" && die
	fi
done
# Lock is available and timeout has not occured, acquire it
touch /root/hmd.lock && log "Acquiring lock file.."
# Set up some vars
PROC="hackmerced_$BRANCH"
REPO_LOC="/opt/$PROC"
REPO_LOC_SERVER="$REPO_LOC/server/"
REPO_LOC_CLIENT="$REPO_LOC/client/"
# Stop pm2
env HOME=$PM2_ENV pm2 stop $PROC && log "Stopping pm2 $PROC process"
# Remove old repo files
rm -rf $REPO_LOC && log "Clearing old repo files"
mkdir $REPO_LOC && log "Creating new repo folder"
# Clone new repo files
git clone -b $BRANCH git@github.com:HackMerced/HackMercedf18.git $REPO_LOC && log "Cloning new repo to $REPO_LOC"
# Install node dependencies
npm --prefix $REPO_LOC_SERVER install $REPO_LOC_SERVER && log "Installing server node dependencies"
if [ -e "$REPO_LOC_CLIENT/package.json" ]; then
	npm --prefix $REPO_LOC_CLIENT run build $REPO_LOC_CLIENT && log "Installing client node dependencies"
fi
# Start pm2
env HOME=$PM2_ENV pm2 start $PROC --update-env && log "Restarting pm2 $PROC processs"
# Free lock file
rm /root/hmd.lock && log "Freeing lock file.." && log "Repo update complete"
