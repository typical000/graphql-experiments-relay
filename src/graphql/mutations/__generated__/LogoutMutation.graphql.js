/**
 * @flow
 * @relayHash 3991f47a74af6f3c5c7a7bdc9a241e80
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type LogoutMutationVariables = {| |};
export type LogoutMutationResponse = {|
  +logout: ?{|
    +guest: boolean;
  |};
|};
*/


/*
mutation LogoutMutation {
  logout {
    guest
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "LogoutMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "AppData",
        "name": "logout",
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
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "LogoutMutation",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "LogoutMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "AppData",
        "name": "logout",
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
  "text": "mutation LogoutMutation {\n  logout {\n    guest\n  }\n}\n"
};

module.exports = batch;
