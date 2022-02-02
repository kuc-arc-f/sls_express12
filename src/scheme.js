const {gql } = require('apollo-server-lambda');
//import {GQL_MUTATION} from './mutation'
const Query = require('./query');
const Mutation = require('./mutation');

module.exports.getTypeDefs =  () => {
  return gql`
  type User {
    id: Int!
    name: String
    email: String
    password: String
  }
  type NoteTag {
    id: Int!
    name: String
  }
  type Category {
    id: Int!
    name: String
  }    
  type Note {
    id: Int!
    title: String
    content: String
    userId: Int! 
    category: Category
    noteTag: [NoteTag]
  }
  type Task {
    id: String!
    title: String
  }
  ${Query.getQuery()}
  ${Mutation.getMutation()}
`;
}
