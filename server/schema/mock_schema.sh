#!/bin/bash

# Check for the command line argument
if [ "$1" == "" ]; then
	echo "Usage: mock_data.sh <number_of_documents>"
	exit 1
fi

# If command line utils aren't installed, exit
if ! foobar_loc="$(type -p mongoimport)" || [[ -z $foobar_loc ]]; then
	echo "monogoimport not installed"
	exit 1
fi

if ! foobar_loc="$(type -p mongodb-dataset-generator)" || [[ -z $foobar_loc ]]; then
	echo "mongodb-dataset-generator not installed"
	exit 1
fi

if ! foobar_loc="$(type -p jq)" || [[ -z $foobar_loc ]]; then
	echo "jq not installed"
	exit 1
fi

# Mongodb Cloud Atlas URI
MONGO_HOST=HackMerced-shard-0/hackmerced-shard-00-00-1za3e.mongodb.net:27017,hackmerced-shard-00-01-1za3e.mongodb.net:27017,hackmerced-shard-00-02-1za3e.mongodb.net:27017

# Replace the placeholder and insert the correct number of documents to be produced
sed -i 's/__SIZE__/'$1'/g' schema.json

# Generate dummy data
mongodb-dataset-generator schema.json -n 1 -o mock_data.json > /dev/null

# Parse the json into individual file for each collection
jq '.[0].hackers' mock_data.json > hackers_mock_data.json
jq '.[0].judges' mock_data.json > judges_mock_data.json
jq '.[0].volunteers' mock_data.json > volunteers_mock_data.json
jq '.[0].sponsors' mock_data.json > sponsors_mock_data.json

# Get username & password
echo "Connecting to mongo cloud: "
echo "Username: "
read USERNAME
echo "Password: "
read -s PASSWORD

# Upload & import dummy data into the appropriate collections
mongoimport --host $MONGO_HOST --ssl --username $USERNAME --password $PASSWORD --authenticationDatabase admin --db users --collection main --file ./hackers_mock_data.json --jsonArray --drop
mongoimport --host $MONGO_HOST --ssl --username $USERNAME --password $PASSWORD --authenticationDatabase admin --db users --collection main --file ./judges_mock_data.json --jsonArray
mongoimport --host $MONGO_HOST --ssl --username $USERNAME --password $PASSWORD --authenticationDatabase admin --db users --collection main --file ./volunteers_mock_data.json --jsonArray
mongoimport --host $MONGO_HOST --ssl --username $USERNAME --password $PASSWORD --authenticationDatabase admin --db users --collection main --file ./sponsors_mock_data.json --jsonArray
mongofiles --host $MONGO_HOST --ssl --username $USERNAME --password $PASSWORD --authenticationDatabase admin --db resources put person-icon.png --replace
mongofiles --host $MONGO_HOST --ssl --username $USERNAME --password $PASSWORD --authenticationDatabase admin --db resources put orange-triangle-banner.jpg --replace

# Replace the placeholder for document size
sed -i 's/{"size": '$1'/{"size": __SIZE__/g' schema.json

# Clean up
rm ./mock_data.json ./hackers_mock_data.json ./judges_mock_data.json ./volunteers_mock_data.json ./sponsors_mock_data.json

