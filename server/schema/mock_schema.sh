#!/bin/bash

if ! foobar_loc="$(type -p mongoimport)" || [[ -z $foobar_loc ]]; then
	echo "monogoimport not installed"
	exit 1
fi

if ! foobar_loc="$(type -p mongodb-dataset-generator)" || [[ -z $foobar_loc ]]; then
	echo "mongodb-dataset-generator not installed"
	exit 1
fi

mongodb-dataset-generator applicants.json -n 50 -o applicants_mock_data.json

echo "Connecting to mongo cloud:"
echo "Username: "
read username
echo "Password: "
read password
mongoimport --host "mongodb+srv://hackmerced-1za3e.mongodb.net/test" --username $username --password $password --db hackmerced --collection applicants --file ./applicants_mock_data.json --jsonArray
