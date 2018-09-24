#!/bin/bash

# Username & Password
echo -n 'DB Username: '
read db_username
export db_username
echo -n 'DB Password: '
read -s db_password
export db_password
echo ''

# Drop Collections
echo -n 'Drop collections (y/n): '
read DROP_COLLECTIONS
DROP_COLLECTIONS=$(echo $DROP_COLLECTIONS | awk '{print tolower($0)}')
if [[ $DROP_COLLECTIONS == 'y' || $DROP_COLLECTIONS == 'yes' ]]; then
    echo -n 'Are you sure? This will drop all collections on the db (y/n): '
    read DROP_COLLECTIONS
fi
DROP_COLLECTIONS=$(echo $DROP_COLLECTIONS | awk '{print tolower($0)}')
export DROP_COLLECTIONS

# Mock Data Size
echo -n 'The number of mock data entries will default to 50. Specify other mock data size (y/n): '
read CUSTOM_MOCK_SIZE
CUSTOM_MOCK_SIZE=$(echo $CUSTOM_MOCK_SIZE | awk '{print tolower($0)}')
if [[ $CUSTOM_MOCK_SIZE == 'y' || $CUSTOM_MOCK_SIZE == 'yes' ]]; then
    echo -n 'Size: '
    read MOCK_SIZE
    export MOCK_SIZE
fi

# Start mock_data node script
node ./model/mock_data.js
