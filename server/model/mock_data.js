const Chance = require('chance');
const chance = new Chance();
const models = require('./models');
const db = require('../api/db');

let dropCollections = process.env.DROP_COLLECTIONS || false;
let mockSize = process.env.MOCK_SIZE || 50;
let numOfAttendees = 10;

if(dropCollections) {
    console.info('Dropping database \'main\'..'); 
    db.main.dropDatabase();
}

let data = {
    hackers: [],
    volunteers: [],
    judges: [],
    sponsors: [],
    teams: [],
    announcements: [],
    events: [],
    timeline: []
};

for (i = 0; i < mockSize; i++) {
    let hacker = new models.Hackers({
        'full_name': chance.first() + ' ' + chance.last(),
        'email': chance.email(),
        'password': '$2a$08$K2zg0yTD8RjlYsDWcbLcEupQM3j.mcT5z1MasEbZYCHFyIHQONPv2',
        'phone': chance.phone(),
        'school': chance.sentence({ words: 5 }),
        'age': chance.age(),
        'gender': chance.pickone(['Male', 'Female', 'Non-Binary/Other', 'Prefer Not To Say']),
        'skills': chance.pick(['Developement', 'Design', 'Data Science', 'Project Management'], chance.integer({ min: 0, max: 4})),
        'interests': chance.pick(['Front-End Web', 'Back-End Web', 'Mobile Apps', 'Embedded Devices', 'IOT', 'VR', 'Distributed Systems', 'Hardware', 'Data Science', 'Data Visualization'], chance.integer({ min: 0, max: 9})),
        'programming_languages': chance.pick(['Python', 'Java', 'C/C++', 'Javascript', 'Ruby', 'R'], chance.integer({ min: 0, max: 6})),
        'dietary_restrictions': chance.sentence({ words: 5 }),
        'allergies': chance.sentence({ words: 5 }),
        'special_needs': chance.sentence({ words: 5 }),
        'shirt_size': chance.pickone(['X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', 'XXX-Large']),
        'previous_hackathons': chance.pickone(['0', '1-2', '3-4', '4+']),
        'have_team': chance.pickone(['yes', 'no']),
        'team_emails': chance.pickset([chance.email(), chance.email(), chance.email(), chance.email()], chance.integer({ min: 0, max: 4})),
        'require_reimbursement': chance.pickone(['yes', 'no']),
        'linkedin': 'http://linkedin.com/in/' + chance.word({ length: 7 }),
        'github': 'http://github.com/' + chance.word({ length: 7 }),
        'site_other': chance.domain(),
        'resume': chance.domain() + chance.word({ length: 5 }) + '.pdf',
        'application_status': chance.pickone(['submitted', 'registered', 'accepted', 'checked_in']),
        'privileges': ['user', 'hacker'],
        'type': 'hacker'
    });
	let volunteer = new models.Volunteers({
		'full_name': chance.first() + ' ' + chance.last(),
		'phone': chance.phone(),
		'email': chance.email(),        
        'password': '$2a$08$K2zg0yTD8RjlYsDWcbLcEupQM3j.mcT5z1MasEbZYCHFyIHQONPv2',
        'age': chance.age(),
        'previous_experience': chance.sentence({ words: 5 }),
		'shirt_size': chance.pickone(['X-Small', 'Small', 'Medium', 'Large', 'X-Large']),
		'availability': '',
        "position": chance.sentence({ words: 5 }),
        'privileges': ['user', 'volunteer'],
        'application_status': chance.pickone(['received', 'under review', 'accepted']),
		'type': 'volunteer'
	});
	let judge = new models.Judges({
		'full_name': chance.first() + ' ' + chance.last(),
		'title': chance.pickone(['Prof.', 'Software Engineer']),
		'email': chance.email(),
        'password': '$2a$08$K2zg0yTD8RjlYsDWcbLcEupQM3j.mcT5z1MasEbZYCHFyIHQONPv2',
		'phone': chance.phone(),
		'shirt_size': chance.pickone(['X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', 'XXX-Large']),
		'occupation': chance.pickone(['Faculty', 'Professional', 'Other']),
		'position': chance.sentence({ words: 3 }),
		'organization': chance.pick([chance.city()+' University','University of ' + chance.city(), chance.sentence({ words: 1 }) + ' Co.', chance.sentence({ words: 1 }) + ' Ltd']),
		'linkedin': 'http://linkedin.com/in/' + chance.word({ length: 7 }),
		'site_other': chance.domain(),
		'photo': 'person-icon.png',
        'privileges': ['user', 'judge'],
		'type': 'judge'		
	});
	let sponsor = new models.Sponsors({
		'organization': chance.pick([chance.city() + ' University','University of ' + chance.city(), chance.sentence({ words: 1 }) + ' Co.', chance.sentence({ words: 1 }) + ' Ltd']),
		'email': chance.email(),
        'password': '$2a$08$K2zg0yTD8RjlYsDWcbLcEupQM3j.mcT5z1MasEbZYCHFyIHQONPv2',
		'phone': chance.phone(),
		'rep_name': chance.first()  + chance.last(),
		'rep_position': chance.sentence({ words: 3 }),
		'linkedin': 'http://linkedin.com/in/' + chance.word({ length: 7 }),
		'site_other': chance.domain(),
		'photo': 'orange-triangle-banner.jpg',
        'privileges': ['user', 'sponsor'],
		'type': 'sponsor'
    });
    let announcement = new models.Announcements({
        'title': chance.sentence({ words: 4 }),
        'body': chance.sentence({ words: 4 }),
        'visible_to': ['hackers'],
        'slack_channel': chance.word(),
        'pinned': chance.pickone([true, false])
    });
    let event = new models.Events({
        'date': chance.date() ,
        'length_mins': chance.integer({ min: 10, max: 500 }) ,
        'name': chance.sentence({ words: 4 }),
        'description': chance.sentence({ words: 10 }),
        'type': chance.pickone(['workshop', 'other']),
        'host': chance.name(),
        'attendees': []
    });
    for(j = 0; j < numOfAttendees; j++) {
        let attendee = {
            'name': chance.name(),
            'email': chance.email(),
            'status': chance.pickone(['registered', 'checked_in']),
            'host': chance.name(),
            'qr': chance.string()
        };
        event.attendees.push(attendee);
    }
    data.hackers.push(hacker);
    data.volunteers.push(volunteer);
    data.judges.push(judge);
    data.sponsors.push(sponsor);
    data.announcements.push(announcement);
    data.events.push(event);
    if (i % 5 == 0) {
        data.timeline.push(event._id);
    }
}

let hackerEmails = data.hackers.map((h) => { return h.email; });
for(i = 0; i < data.hackers.length; i+=4) {
    let team = new models.Teams({
        'project_name': chance.sentence({
            words: 4
        }),
        'project_description': chance.sentence({
            words: 10
        }),
        'leader': data.hackers[i].email,
        'members': hackerEmails.slice(i, i + 4),
        'github': 'http://github.com/' + chance.word({
            length: 7
        }),
        'devpost': 'http://devpost.com/' + chance.word({
            length: 7
        })
    });
    data.teams.push(team);
}

let bMap = 0;

models.Hackers.insertMany(data.hackers, (error, docs) => {
    if(error) console.error(error);
    console.info(docs.length + ' hackers added');
    bMap |= 0b00000001;
});

models.Volunteers.insertMany(data.volunteers, (error, docs) => {
    if(error) console.error(error);
    console.info(docs.length + ' volunteers added');
    bMap |= 0b00000010;
});

models.Judges.insertMany(data.judges, (error, docs) => {
    if(error) console.error(error);
    console.info(docs.length + ' judges added');
    bMap |= 0b00000100;
});

models.Sponsors.insertMany(data.sponsors, (error, docs) => {
    if(error) console.error(error);
    console.info(docs.length + ' sponsors added');
    bMap |= 0b00001000;
});

models.Announcements.insertMany(data.announcements, (error, docs) => {
    if (error) console.error(error);
    console.info(docs.length + ' announcements added');
    bMap |= 0b00010000;
});

models.Teams.insertMany(data.teams, (error, docs) => {
    if (error) console.error(error);
    console.info(docs.length + ' teams added');
    bMap |= 0b00100000;
});

models.Events.insertMany(data.events, (error, docs) => {
    if (error) console.error(error);
    console.info(docs.length + ' events added');
    bMap |= 0b01000000;
});

models.Timeline.insertMany(data.timeline, (error, docs) => {
    if (error) console.error(error);
    console.info(docs.length + ' events added to timeline');
    bMap |= 0b10000000;
});

const interval = setInterval(() => {
    if (bMap == 0b11111111) {
        console.info('Closing database connections..');
        db.main.close();
        db.resources.close();
        clearInterval(interval);
    }
}, 500);