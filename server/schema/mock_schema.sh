#!/bin/bash

# If Commandline Utils Aren't Installed, Exit
if ! foobar_loc="$(type -p mongoimport)" || [[ -z $foobar_loc ]]; then
	echo "monogoimport not installed"
	exit 1
fi

if ! foobar_loc="$(type -p mongodb-dataset-generator)" || [[ -z $foobar_loc ]]; then
	echo "mongodb-dataset-generator not installed"
	exit 1
fi

# Mongodb Cloud Atlas URI
MONGO_HOST=HackMerced-shard-0/hackmerced-shard-00-00-1za3e.mongodb.net:27017,hackmerced-shard-00-01-1za3e.mongodb.net:27017,hackmerced-shard-00-02-1za3e.mongodb.net:27017

# Generate Dummy Data
mongodb-dataset-generator hackers.json -n 50 -o hackers_mock_data.json 2> /dev/null
mongodb-dataset-generator judges.json -n 50 -o judges_mock_data.json 2> /dev/null
mongodb-dataset-generator volunteers.json -n 50 -o volunteers_mock_data.json 2> /dev/null
mongodb-dataset-generator sponsors.json -n 50 -o sponsors_mock_data.json 2> /dev/null

# Get Username & Password
echo "Connecting to mongo cloud: "
echo "Username: "
read USERNAME
echo "Password: "
read -s PASSWORD

# Upload & Import Dummy Data
mongoimport --host $MONGO_HOST --ssl --username $USERNAME --password $PASSWORD --authenticationDatabase admin --db users --collection hackers --file ./hackers_mock_data.json --jsonArray --drop
mongoimport --host $MONGO_HOST --ssl --username $USERNAME --password $PASSWORD --authenticationDatabase admin --db users --collection judges --file ./judges_mock_data.json --jsonArray  --drop
mongoimport --host $MONGO_HOST --ssl --username $USERNAME --password $PASSWORD --authenticationDatabase admin --db users --collection volunteers --file ./volunteers_mock_data.json --jsonArray --drop
mongoimport --host $MONGO_HOST --ssl --username $USERNAME --password $PASSWORD --authenticationDatabase admin --db users --collection sponsors --file ./sponsors_mock_data.json --jsonArray --drop
mongofiles --host $MONGO_HOST --ssl --username $USERNAME --password $PASSWORD --authenticationDatabase admin --db resources put person-icon.png --replace
mongofiles --host $MONGO_HOST --ssl --username $USERNAME --password $PASSWORD --authenticationDatabase admin --db resources put orange-triangle-banner.jpg --replace

# Clean Up
rm ./hackers_mock_data.json ./judges_mock_data.json ./volunteers_mock_data.json ./sponsors_mock_data.json