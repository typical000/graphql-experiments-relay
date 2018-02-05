const {find} = require('lodash')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express')
const {makeExecutableSchema} = require('graphql-tools')

const appData = require('./__mocks__/appData')
const users = require('./__mocks__/users')
const actions = require('./__mocks__/actions') // eslint-disable-line

const PORT = process.env.PORT

// The GraphQL schema in string form
const typeDefs = `
  type AppData {
    guest: Boolean!
    user: User
  }

  type User {
    id: Int!
    avatar: String
    screenname: String
    gender: Int
    geo: Geo
    actions: Actions
  }

  type OffsetUsers {
    users: [User]
    limitReached: Boolean!
  }

  type Geo {
    city: String
    country: String
    lat: Float
    lng: Float
  }

  type Actions {
    userId: Int!
    like: Like!
    favorite: Favorite!
  }

  type Like {
    userId: Int!
    available: Boolean!
    active: Boolean!
  }

  type Favorite {
    userId: Int!
    available: Boolean!
    active: Boolean!
  }

  type Query {
    appData: AppData
    users: [User]
    user(id: Int!): User
    geo(id: Int!): Geo
    offsetUsers(offset: Int!, limit: Int!): OffsetUsers

    actions(id: Int): Actions
    like(id: Int): Like
    favorite(id: Int): Favorite
  }

  type Mutation {
    logout: AppData
  }
`

/**
 * Resolvers. For more info see:
 * https://www.apollographql.com/docs/graphql-tools/resolvers.html#Resolver-function-signature
 */
const resolvers = {
  Query: {
    // Main application data
    appData: () => appData,
    // Request just ALL users
    users: () => users,
    // Request users with offset and limit
    offsetUsers: (obj, {offset, limit}) => {
      const result = users.slice(offset, offset + limit)
      return {
        users: result,
        limitReached: result.length < limit,
      }
    },
    // Request single user by ID
    user: (obj, args, context, info) => find(users, {id: args.id}), // eslint-disable-line
    // Get geolocation info for single user by ID
    geo: (obj, args) => find(users, {id: args.id}).geo,
    // Actions
    like: (obj, {id}) => find(actions, {userId: id}).like,
    favorite: (obj, {id}) => find(actions, {userId: id}).favorite,
  },

  User: {
    actions: (obj) => find(actions, {userId: obj.id})
  },

  Like: {
    userId: (obj, args) => find(users, {id: obj.userId}).id
  },

  Favorite: {
    userId: (obj) => find(users, {id: obj.userId}).id
  },

  Mutation: {
    // Just return logged-out data
    logout: () => ({
      guest: true,
      user: null
    })
  }
}

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

// Initialize the app
const app = express()

// Enable cors, to void make requests from 4000 port to 4001
app.use(cors())

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema,
  debug: true,
  tracing: true,
  logFunction: ({action, step, key, data}) => {
    /* eslint-disable */
    console.log('')
    console.log('> Performed request:')
    console.log(`action code: ${action}`)
    console.log(`step code: ${step}`)
    console.log(`action key: ${key}`)
    console.log(`data: ${data}`)
    /* eslint-enable */
  }
}))

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}))

// Start the server
app.listen(PORT, (error) => {
  if (error) {
    return error
  }

  // eslint-disable-next-line
  console.log(`Go to http://localhost:${PORT}/graphiql to run queries!`)
  return null
})
