const { gql } = require('apollo-server');

const typeDefs = gql`
    "A track is a group of modules that teaches about a specific topic"
    type Track {
        id: ID!
        title: String!
        author: Author!
        thumbnail: String
        length: Int
        modulesCount: Int
    }

    type Author {
        id: ID!
        name: String!
        photo: String
    }

    type Mission {
        id: ID!
        name: String!
        description: String!       
    }

    type SpaceCat {
        id: ID!
        name: String!
        age: Int
        missions: [Mission]
    }

    type Query {
        tracksForHome: [Track]
        spaceCats: [SpaceCat]
    }
`;

module.exports = typeDefs;