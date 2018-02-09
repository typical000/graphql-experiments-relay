import graphql from 'react-relay'

export const DEFAULT_USER_FRAGMENT = graphql`
  fragment User_defaultFields on User {
    id
    screenname
    avatar
    gender
    geo {
      city
      country
    }
  }
`
