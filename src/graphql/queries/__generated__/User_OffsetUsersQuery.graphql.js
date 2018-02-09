/**
 * @flow
 * @relayHash 54c83ce58075f381df18de19ef881386
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type User_OffsetUsersQueryResponse = {|
  +offsetUsers: ?{|
    +limitReached: boolean;
  |};
|};
*/


/*
query User_OffsetUsersQuery(
  $offset: Int!
  $limit: Int!
) {
  offsetUsers(offset: $offset, limit: $limit) {
    limitReached
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "offset",
        "type": "Int!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "limit",
        "type": "Int!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "User_OffsetUsersQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "limit",
            "variableName": "limit",
            "type": "Int!"
          },
          {
            "kind": "Variable",
            "name": "offset",
            "variableName": "offset",
            "type": "Int!"
          }
        ],
        "concreteType": "OffsetUsers",
        "name": "offsetUsers",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "limitReached",
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
  "name": "User_OffsetUsersQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "offset",
        "type": "Int!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "limit",
        "type": "Int!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "User_OffsetUsersQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "limit",
            "variableName": "limit",
            "type": "Int!"
          },
          {
            "kind": "Variable",
            "name": "offset",
            "variableName": "offset",
            "type": "Int!"
          }
        ],
        "concreteType": "OffsetUsers",
        "name": "offsetUsers",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "limitReached",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query User_OffsetUsersQuery(\n  $offset: Int!\n  $limit: Int!\n) {\n  offsetUsers(offset: $offset, limit: $limit) {\n    limitReached\n  }\n}\n"
};

module.exports = batch;
