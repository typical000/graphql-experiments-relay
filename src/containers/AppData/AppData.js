import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {QueryRenderer} from 'react-relay'
import environment from '../relayEnvironment'
import {APP_DATA_QUERY} from '../../graphql/queries/AppData'
import {isEmpty} from '../../utils/object'
import Loader from '../../components/ui/Loader'
import {InternalContent, ExternalContent} from '../../components/Content'

const AppData = () => (
  <QueryRenderer
    environment={environment}
    /**
     * Nice, Relay forces us to use 'type-based' approach.
     * Otherwise, relay-compiler will refuse to comile
     * your graphQL code with similar error:
     *
     * Parse error: Error: FindGraphQLTags: Operation names in graphql
     * tags must be prefixed with the module name and end in "Mutation",
     * "Query", or "Subscription". Got `AppDataQuery` in module `queries`.
     * in "graphql/AppData/queries.js"
     *
     * So, if you want to make feature-based architecture - don't use relay.
     */
    query={APP_DATA_QUERY}

    /**
     * Wow! Really? Withous passing any variable we receive erro on frontend:
     *
     * warning.js:33 Warning: Failed child context type: Invalid prop/context
     * `relay` supplied to `ReactRelayQueryRenderer`, expected `[object Object]`
     * to be an object with an `environment` and `variables`.
     *
     * There is an open issue for this:
     * https://github.com/facebook/relay/issues/2300
     */
    variables={{}}

    render={({error, props}) => {
      console.log('>>> APP')
      console.log(props)
      console.log(error)

      // // Data can be 'undefined' if query isn't already fetched from server
      if (isEmpty(props)) return <Loader fullScreen active />

      const {appData: {guest, user}} = props

      if (guest) return <ExternalContent />
      return <InternalContent user={user} />
    }}
  />
)

export default AppData



// ================================================================================

// import React, {PureComponent} from 'react'
// import PropTypes from 'prop-types'
// import {QueryRenderer} from 'react-relay'
// import environment from '../relayEnvironment'
// import {APP_DATA_QUERY} from '../../graphql/queries/AppData'
// import {isEmpty} from '../../utils/object'
// import Loader from '../../components/ui/Loader'
// // import {InternalContent, ExternalContent} from '../../components/Content'

// const AppData = () => (
//   <QueryRenderer
//     environment={environment}
//     /**
//      * Nice, Relay forces us to use 'type-based' approach.
//      * Otherwise, relay-compiler will refuse to comile
//      * your graphQL code with similar error:
//      *
//      * Parse error: Error: FindGraphQLTags: Operation names in graphql
//      * tags must be prefixed with the module name and end in "Mutation",
//      * "Query", or "Subscription". Got `AppDataQuery` in module `queries`.
//      * in "graphql/AppData/queries.js"
//      *
//      * So, if you want to make feature-based architecture - don't use relay.
//      */
//     query={APP_DATA_QUERY}

//     /**
//      * Wow! Really? Withous passing any variable we receive erro on frontend:
//      *
//      * warning.js:33 Warning: Failed child context type: Invalid prop/context
//      * `relay` supplied to `ReactRelayQueryRenderer`, expected `[object Object]`
//      * to be an object with an `environment` and `variables`.
//      *
//      * There is an open issue for this:
//      * https://github.com/facebook/relay/issues/2300
//      */
//     variables={{}}

//     render={({error, props}) => {
//       console.log('>>> APP')
//       console.log(props)
//       console.log(error)

//       // // Data can be 'undefined' if query isn't already fetched from server
//       if (isEmpty(props)) return <Loader fullScreen active />

//       return <div>AAA</div>

//       // // If we have any data - we can destructure data object
//       // const {appData: {guest, user}} = data

//       // if (guest) return <ExternalContent />
//       // return <InternalContent user={user} />
//     }}
//   />
// )

// export default AppData
