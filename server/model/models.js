'use strict';

const mongoose = require('mongoose');

const hackersSchema = mongoose.Schema({
	"full_name": {
		type: String,
		validate: {
			validator: function(v) {
				return v.length() > 2;
		},
			message: '{VALUE} is not valid. Please enter your full name.'
		},
		required: [true, 'Full name required']
	},
	"email": {
		type: String,
		index: true,
		unique: true,
		validate: {
			validator: function(v) {
				return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
		},
			message: '{VALUE} is not a valid email!'
		},
		required: [true, 'User email required']
	},
	"password": {
		type: String,
		required: [true, 'User password required']
	},
	"phone": {
		type: String,
		validate: {
			validator: function(v) {
				return /\d{3}-\d{3}-\d{4}/.test(v);
		},
			message: '{VALUE} is not a valid phone number!'
		},
		required: [true, 'User phone number required']
	},
	"school": {
		type: String,
		required: [true, 'School required']
	},
	"age": {
		type: Number,
		required: [true, 'Age required']
	},
	"gender": {
		type: String,
		required: [true, 'Gender required']
	},
	"skills": [String],
	"interests": [String],
	"programming_languages": [String],
	"dietary_restrictions": String,
	"allergies": String,
	"special_needs": String,
	"shirt_size": {
		type: String,
		required: [true, 'Shirt size required']
	},
	"previous_hackathons": {
		type: String,
		required: [true, 'Number of previous hackathons required']
	},
	"have_team": {
		type: String,
		required: [true, 'Please specify if you have a team']
	},
	"team_emails": [String],
	"require_reimbursement": {
		type: String,
		required: [true, 'Please specify if you require reimbursement']
	},
	"linkedin": String,
	"github": String,
	"site_other": String,
	"resume": String,
	"application_status": {
		type: String,
		required: [true, 'Application status required']
	},
        "privileges": {
		type: [String],
		required: [true, "User privileges required"]
	},	
	"type": {
		type: String,
		required: [true, "User type required"]
	}
});

const judgesSchema = mongoose.Schema({
	"full_name": {
		type: String,
		validate: {
			validator: function(v) {
				return v.length() > 2;
		},
			message: '{VALUE} is not valid. Please enter your full name.'
		},
		required: [true, 'Full name required']
	},
	"title": String,
	"email": {
		type: String,
		index: true,
		unique: true,
		validate: {
			validator: function(v) {
				return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
		},
			message: '{VALUE} is not a valid email!'
		},
		required: [true, 'User email required']
	},
	"password": {
		type: String,
		required: [true, 'User password required']
	},
	"phone": {
		type: String,
		validate: {
			validator: function(v) {
				return /\d{3}-\d{3}-\d{4}/.test(v);
		},
			message: '{VALUE} is not a valid phone number!'
		},
		required: [true, 'User phone number required']
	},
	"shirt_size": {
		type: String,
		required: [true, 'Shirt size required']
	},
	"occupation": String,
	"position":String,
	"organization": String,
	"linkedin": String,
	"site_other": String,
	"photo": String,
        "privileges": {
	        type: [String],
		required: [true, "User privileges required"]
	},
	"type": {
	        type: String,
		required: [true, "User type required"]
	}
}});

const volunteersSchema = mongoose.Schema({
	"full_name": {
		type: String,
		validate: {
			validator: function(v) {
				return v.length() > 2;
		},
			message: '{VALUE} is not valid. Please enter your full name.'
		},
		required: [true, 'Full name required']
	},
	"title": String,
	"email": {
		type: String,
		index: true,
		unique: true,
		validate: {
			validator: function(v) {
				return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
		},
			message: '{VALUE} is not a valid email!'
		},
		required: [true, 'User email required']
	},
	"password": {
		type: String,
		required: [true, 'User password required']
	},
	"phone": {
		type: String,
		validate: {
			validator: function(v) {
				return /\d{3}-\d{3}-\d{4}/.test(v);
		},
			message: '{VALUE} is not a valid phone number!'
		},
		required: [true, 'User phone number required']
	},
	"age": {
		type: Number,
		required: [true, 'Age required']
	},
	"occupation": String,
	"previous_experience": String,
	"shirt_size": {
		type: String,
		required: [true, 'Shirt size required']
	},
	"availability": {
		type: [[Date]],
		required: [true, 'Availability required']
	},
        "privileges": {
		type: [String],
		required: [true, "User privileges required"]
	},
        "type": {
	        type: String,
	        required: [true, "User type required"]
	}
}});

const sponsorsSchema = mongoose.Schema({
	"organization": {
		type: String,
		required: [true, 'Organization required']
	},
	"email": {
		type: String,
		index: true,
		unique: true,
		validate: {
			validator: function(v) {
				return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
		},
			message: '{VALUE} is not a valid email!'
		},
		required: [true, 'User email required']
	},
	"password": {
		type: String,
		required: [true, 'User password required']
	},
	"phone": {
		type: String,
		validate: {
			validator: function(v) {
				return /\d{3}-\d{3}-\d{4}/.test(v);
		},
			message: '{VALUE} is not a valid phone number!'
		},
		required: [true, 'User phone number required']
	},
	"rep_name": String,
	"rep_position": String,
	"linkedin": String,
	"site_other": String,
	"photo": String,
	"privileges": {
		type: [String],
		required: [true, "User privileges required"]
	},
        "type": {
		type: String,
		required: [true, "User type required"]							        }
	}
});

const models = {
	hackers : mongoose.model('Hackers', hackersSchema, 'main'),
	judges : mongoose.model('Judges', judgesSchema, 'main'),
	volunteers : mongoose.model('Volunteers', volunteersSchema, 'main'),
	sponsors : mongoose.model('Sponsors', sponsorsSchema, 'main')
}

module.exports = models
