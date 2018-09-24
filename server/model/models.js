'use strict';

const mongoose = require('mongoose');
const db = require('../api/db');

/**
 * Users
 */
const usersSchema = new mongoose.Schema({
    "email": {
        type: String,
        index: {unique: true},
        validate: {
            validator: function (v) {
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
        required: [true, 'User phone number required']
    },
    "privileges": {
        type: [String],
        required: [true, "User privileges required"]
    },
    "announcements_viewed": {
        type: [String]
    }
}, {discriminatorKey: 'type', collection: 'users', 'timestamps': {createdAt: 'created_at', updatedAt: 'updated_at'}});

const Users = db.main.model('Users', usersSchema, 'users');

/**
 * Hackers
 */
const Hackers = Users.discriminator('hacker', new mongoose.Schema({
    "full_name": {
        type: String,
        validate: {
            validator: function (v) {
                return v.length > 2;
            },
            message: '{VALUE} is not valid. Please enter your full name.'
        },
        required: [true, 'Full name required']
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
        default: "submitted",
        enum: ["submitted", 'accepted', 'registered', 'checked_in'],
        required: [true, 'Application status required']
    }
}, {collection: 'users'}));

/**
 * Judges
 */
const Judges = Users.discriminator('judge', new mongoose.Schema({
    "full_name": {
        type: String,
        validate: {
            validator: function (v) {
                return v.length > 2;
            },
            message: '{VALUE} is not valid. Please enter your full name.'
        },
        required: [true, 'Full name required']
    },
    "title": String,
    "shirt_size": {
        type: String,
        required: [true, 'Shirt size required']
    },
    "occupation": String,
    "position": String,
    "organization": String,
    "linkedin": String,
    "site_other": String,
    "photo": String
}, {collection: 'users'}));

/**
 * Volunteers
 */
const Volunteers = Users.discriminator('volunteer', new mongoose.Schema({
    "full_name": {
        type: String,
        validate: {
            validator: function (v) {
                return v.length > 2;
            },
            message: '{VALUE} is not valid. Please enter your full name.'
        },
        required: [true, 'Full name required']
    },
    "position": String,
    "previous_experience": String,
    "age": {
        type: Number,
        required: [true, 'Age required']
    },
    "shirt_size": {
        type: String,
        required: [true, 'Shirt size required']
    },
    "availability": {
        type: [[Date]],
        required: [true, 'Availability required']
    },
    "hours": [[Date]],
    "application_status": {
        type: String,
        default: "submitted",
        required: [true, 'Application status required']
    }
}, {collection: 'users'}));

/**
 * Sponsors
 */
const Sponsors = Users.discriminator('sponsor', new mongoose.Schema({
    "organization": {
        type: String,
        required: [true, 'Organization required']
    },
    "rep_name": String,
    "rep_position": String,
    "linkedin": String,
    "site_other": String,
    "photo": String
}, {collection: 'users'}));

/**
 * HackMerced Dev Team
 */
const HackMercedTeam = Users.discriminator('hackmerced_team', new mongoose.Schema({
    "full_name": {
        type: String,
        validate: {
            validator: function (v) {
                return v.length > 2;
            },
            message: '{VALUE} is not valid. Please enter your full name.'
        }
    },
    "shirt_size": {
        type: String,
        required: [true, 'Shirt size required']
    }
}, {collection: 'users'}));

/**
 * Hackathon Participant Teams
 */
const teamSchema = new mongoose.Schema({
    "project_name": String,
    "project_description" : String,
    "leader": {
        type: String,
        validate:{
            validator: function (v){
                return v.length > 1;
            },
            message: '{VALUE} is not valid. Please enter leader\'s email.'
        }
    },
    "members": {
        type: [String],
        validate:{
            validator: function (v){
                return v.length > 1;
            },
            message: '{VALUE} is not valid. Please enter member\'s emails.'
        }
    },
    "github": String,
    "devpost": String
}, {collection: 'teams', 'timestamps': {createdAt: 'created_at', updatedAt: 'updated_at'}});

const Teams = db.main.model('Teams', teamSchema, 'teams');

/**
 * Attendees
 */
const attendeesSchema = new mongoose.Schema({
    "name": {
        type: String,
        required: [true, 'Attendee name required']
    },
    "email": {
        type: String,
        index: {unique: true},
        required: [true, 'Attendee email required']
    },
    "qr": {
        type: String,
        index: {unique: true},
    },
    "status": {
        type: String,
        enum: ['registered', 'checked_in']
    }
 }, {'timestamps': {createdAt: 'created_at', updatedAt: 'updated_at'}});

/**
 * Events
 */
const eventsSchema = new mongoose.Schema({
    "date": {
        type: Date,
        required: [true, 'Event date required']
    },
    "length_mins": {
        type: Number,
        min: 1
    },
    "name": {
        type: String,
        required: [true, 'Event name required']
    },
    "description": {
        type: String,
        required: [true, 'Event description required']
    },
    "type": {
        type: String,
        required: [true, "Event type required"]
    },
    "host": String,
    "attendees": [attendeesSchema]
}, {collection: 'events', 'timestamps': {createdAt: 'created_at', updatedAt: 'updated_at'}});

const Events = db.main.model('Events', eventsSchema, 'events');

/**
 * Timeline
 */
const timelineSchema = new mongoose.Schema({
    "event_id": {
        type: String,
        index: {unique: true}
    }
}, {collection: 'timeline', 'timestamps': {createdAt: 'created_at', updatedAt: 'updated_at'}});

const Timeline = db.main.model('Timeline', timelineSchema, 'timeline');

/**
 * Announcements
 */
const announcementsSchema = new mongoose.Schema({
    "title": {
        type: String,
        min: 1,
        max: 256,
        required: [true, 'Announcement title required']
    },
    "body": {
        type: String,
        min: 1,
        max: 512,
        index: {unique: true},
        required: [true, 'Announcement body required']
    },
    "visible_to": {
        type: [String],
        required: [true, 'Announcement visibility groups required']
    },
    "pinned": {
        type: Boolean,
        required: [true, 'Announcement pinned required']
    },
    "slack_channel": String
}, {collection: 'announcements', 'timestamps': {createdAt: 'created_at', updatedAt: 'updated_at'}});

const Announcements = db.main.model('Announcements', announcementsSchema, 'announcements');

const models = {
    Users: Users,
    Hackers: Hackers,
    Judges: Judges,
    Volunteers: Volunteers,
    Sponsors: Sponsors,
    HackMercedTeam: HackMercedTeam,
    Teams: Teams,
    Events: Events,
    Timeline: Timeline,
    Announcements: Announcements,
};

module.exports = models;
