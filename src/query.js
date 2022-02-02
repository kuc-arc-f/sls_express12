
module.exports.getQuery = () => {
  return `
  type Query {
    hello: String
    hoge: String
    tasks: [Task]    
    task(id: Int): Task
    user(id: Int): User
    users: [User]    
    userValid(email: String!, password: String!): User
    note(id: Int): Note
    notes: [Note]
  }
`;
}
