#!/bin/bash
#
# Get vars and run mock_data.js
#

# Username & Password to MongoDB
read -p 'DB Username: ' db_username
export db_username
read -p 'DB Password: ' -s db_password
export db_password
echo ''

# Ask to drop collections. If no, var is set to empty string for falsy comparison.
read -p 'Drop collections (y/n): ' DROP_COLLECTIONS
if [[ $DROP_COLLECTIONS =~ ^([yY](es|ES){0,2})$ ]]; then
  read -p 'Are you sure? This will drop all collections on the db (y/n): ' DROP_COLLECTIONS
  if [[ ! $DROP_COLLECTIONS =~ ^([yY](es|ES){0,2})$ ]]; then
    DROP_COLLECTIONS=''
  fi
else
  DROP_COLLECTIONS=''
fi
export DROP_COLLECTIONS

# Ask to set mock data size. Default is 50.
read -p 'The number of mock data entries will default to 50. Specify other mock data size (y/n): ' CUSTOM_MOCK_SIZE
CUSTOM_MOCK_SIZE=$(echo $CUSTOM_MOCK_SIZE | awk '{print tolower($0)}')
if [[ $CUSTOM_MOCK_SIZE =~ ^([yY](es|ES){0,2})$ ]]; then
  read -p 'Size: ' MOCK_SIZE
  export MOCK_SIZE
fi

# Start mock_data node script
node ./model/mock_data.js
