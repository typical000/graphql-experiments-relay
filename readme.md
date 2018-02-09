# Relay GraphQL experiments

Created by Pavel Davydov

# HOWTO

```
npm run server
```
Starts server on `localhost:4001` and enabled online GraphQL editor on `http://localhost:4001/graphiql`

```
npm run start
```
Starts client dev-server on `localhost:4000`

# TODO

- [x] Configure environment
- [ ] Setup relay server (Based on apollo)
- [x] Create skeleton for future site
  - [x] Layout for logged in or guest user
  - [x] Header
  - [x] Search results with 'Load more'
- [ ] General GraphQL patterns
  - [ ] Query batching
  - [ ] Using fragments
  - [ ] Using variables in GraphQL. Passing params
  - [ ] Load more, pagination
  - [ ] Mutations
  - [ ] Use loader for *.graphql files (https://github.com/apollographql/graphql-tag#webpack-preprocessing-with-graphql-tagloader)
- [ ] GraphQL on frontend (Relay)
  - [ ] Query on server
  - [ ] Fragments usage
  - [ ] Send mutations on server
  - [ ] Directly change data in cache
  - [ ] Optimistic updates
- [ ] Tests
  - [ ] Setup tests on frontend
  - [ ] Setup tests on backend
