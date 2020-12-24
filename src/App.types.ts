export type HackerState = {
    id: String;
    email: String;
    firstName: String;
    lastName: String;
    age: Number;
    gender: String;
    ethnicity: String;
    shirtSize: String;
    schoolName: String;
    major: String;
    year: String;
    schoolStanding: String;
    dietaryRestrictions: String;
    allergies: String;
    numberOfPreviousHackathons: Number;
    resume: String;
    linkedIn: String;
    gitHub: String;
    devpost: String;
    otherSites: String;
    teamCode: String;
    teamName: String;
    teammates: [String];
    status: String;
    codeOfConduct: Boolean;
    affiliationWithMLH: Boolean;
    photoPolicy: Boolean;
};

export type TokenState = {
    tokenType: String;
    accessToken: String;
    refreshToken: String;
    expiresIn: String;
};
