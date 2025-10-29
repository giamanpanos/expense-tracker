const userTypeDef = `#graphql
  type User {
    _id: ID!
    username: String!
    name: String!
    password: String!
    profilePicture: String
    gender: String!
    transactions: [Transaction!]
  }
  # the ! means it is a required field

  type Query {
     # users: [User!] only for testing purposes, we want only the user trying to log in
    authUser: User
    user(userId:ID!): User
  }

  # the authYUser can return null if the user is not authenticated and a specific user may not exist (that is why we have not put !) 

  type Mutation {
    signUp(input: SignUpInput!): User
    login(input: LoginInput!): User
    logout: LogoutResponse
  }

  # functions to change the users table

  input SignUpInput {
    username: String!
    name: String!
    password: String!
    gender: String!
  }

  input LoginInput {
    username: String!
    password: String!
  }

  type LogoutResponse {
    message: String!
  }

  # above are the Mutations types
`;

export default userTypeDef;
