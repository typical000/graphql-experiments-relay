// import graphql from 'react-relay'
// import {DEFAULT_USER_FRAGMENT} from './fragments'

// export const OFFSET_USERS_QUERY = graphql`
//   query OffsetUsers($offset: Int!, $limit: Int!) {
//     offsetUsers(offset: $offset, limit: $limit) {
//       limitReached
//       users {
//         ...User_defaultFields
//       }
//     }
//   }

//   ${DEFAULT_USER_FRAGMENT}
// `

import graphql from 'react-relay'

export const OFFSET_USERS_QUERY = graphql`
  query User_OffsetUsersQuery ($offset: Int!, $limit: Int!) {
    offsetUsers(offset: $offset, limit: $limit) {
      limitReached
      user {
        ...User_defaultFields
      }
    }
  }

`

