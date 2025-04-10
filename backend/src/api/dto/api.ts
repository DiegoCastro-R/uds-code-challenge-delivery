export interface ApiRawResponse {
    id: Number,
    name: String,
    height: Number,
    mass: Number,
    gender: String,
    homeworld: String,
    wiki: String
    image: String
    born: Number,
    bornLocation: String
    died: Number,
    diedLocation: String
    species:String
    hairColor: String
    eyeColor: String
    skinColor: String
    cybernetics: String
    affiliations: String[],
    masters: String[],
    apprentices: String[],
    formerAffiliations: String[],
}

export interface ApiResponse {
    profileInfos: {
    id: Number,
    name: String,
    height: Number,
    mass: Number,
    gender: String,
    homeworld: String,
    wiki: String
    image: String
    },
    biography: {
        born: Number,
        bornLocation: String
        died: Number,
        diedLocation: String
    },
    hairColor: String
    eyeColor: String
    skinColor: String
    cybernetics: String
    affiliations: String[],
    masters: String[],
    apprentices: String[],
    formerAffiliations: String[],
}