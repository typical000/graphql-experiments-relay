// import graphql from 'react-relay'

// export const APP_DATA_FULL_QUERY = graphql`
//   query AppDataQuery {
//     appData {
//       guest
//       user {
//         ...User_defaultFields
//       }
//     }
//   }

//   ${DEFAULT_USER_FRAGMENT}
// `

import graphql from 'react-relay'

export const APP_DATA_FULL_QUERY = graphql`
  query AppDataQuery {
    appData {
      guest
      user {
        ...User_defaultFields
      }
    }
  }
`

// export const APP_DATA_FULL_QUERY = graphql`
//   query AppDataQuery {
//     appData {
//       guest
//       user {
//         ...User_defaultFields
//       }
//     }
//   }
// `