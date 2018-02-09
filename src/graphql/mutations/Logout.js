import graphql from 'react-relay'

export const LOGOUT_MUTATION = graphql`
  mutation LogoutMutation {
    logout {
      guest
    }
  }
`
