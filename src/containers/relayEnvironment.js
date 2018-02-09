import {Environment, Network, RecordSource, Store} from 'relay-runtime'
import {GRAPHQL_SERVER} from '../constants/url'

/**
 * Create relay environment that must be passed for each mutation
 * or query inside our components
 */

function fetchQuery(operation, variables) {
  return fetch(`${GRAPHQL_SERVER}/graphql`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => response.json())
}

export default new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
})