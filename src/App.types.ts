export type HackerState = {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    ethnicity: string;
    shirtSize: string;
    schoolName: string;
    major: string;
    year: string;
    schoolStanding: string;
    dietaryRestrictions: string;
    allergies: string;
    numberOfPreviousHackathons: number;
    resume: string;
    linkedIn: string;
    gitHub: string;
    devpost: string;
    otherSites: string;
    teamCode: string;
    teamName: string;
    teammates: [string];
    status: string;
    codeOfConduct: boolean;
    affiliationWithMLH: boolean;
    photoPolicy: boolean;
};

export type TokenState = {
    tokenType: string;
    accessToken: string;
    refreshToken: string;
    expiresIn: string;
};
