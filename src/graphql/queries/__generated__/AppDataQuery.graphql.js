/**
 * @flow
 * @relayHash 4896236a638962ae2b0a71fdb4e4416b
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type AppDataQueryResponse = {|
  +appData: ?{|
    +guest: boolean;
  |};
|};
*/


/*
query AppDataQuery {
  appData {
    guest
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppDataQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "AppData",
        "name": "appData",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "guest",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "AppDataQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "AppDataQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "AppData",
        "name": "appData",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "guest",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query AppDataQuery {\n  appData {\n    guest\n  }\n}\n"
};

module.exports = batch;
