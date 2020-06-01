/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type marketplaceQueryVariables = {||};
export type marketplaceQueryResponse = {|
  +getAllProducts: ?$ReadOnlyArray<?{|
    +id: number,
    +title: string,
    +description: string,
    +city_of_origin: string,
    +certification: any,
    +province_of_origin: string,
    +country_of_origin: string,
    +grade: any,
    +size: string,
    +gmo: boolean,
    +washed: boolean,
    +store_temperature_range: string,
    +store_humidity: string,
    +chill_damage_sensitive: boolean,
    +pack_weight: number,
    +price: number,
    +minimum_quantity: number,
    +available: any,
    +createdAt: ?any,
    +updatedAt: ?any,
  |}>
|};
export type marketplaceQuery = {|
  variables: marketplaceQueryVariables,
  response: marketplaceQueryResponse,
|};
*/


/*
query marketplaceQuery {
  getAllProducts {
    id
    title
    description
    city_of_origin
    certification
    province_of_origin
    country_of_origin
    grade
    size
    gmo
    washed
    store_temperature_range
    store_humidity
    chill_damage_sensitive
    pack_weight
    price
    minimum_quantity
    available
    createdAt
    updatedAt
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Product",
    "kind": "LinkedField",
    "name": "getAllProducts",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "city_of_origin",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "certification",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "province_of_origin",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "country_of_origin",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "grade",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "size",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "gmo",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "washed",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "store_temperature_range",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "store_humidity",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "chill_damage_sensitive",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "pack_weight",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "price",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "minimum_quantity",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "available",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "createdAt",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "updatedAt",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "marketplaceQuery",
    "selections": (v0/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "marketplaceQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "marketplaceQuery",
    "operationKind": "query",
    "text": "query marketplaceQuery {\n  getAllProducts {\n    id\n    title\n    description\n    city_of_origin\n    certification\n    province_of_origin\n    country_of_origin\n    grade\n    size\n    gmo\n    washed\n    store_temperature_range\n    store_humidity\n    chill_damage_sensitive\n    pack_weight\n    price\n    minimum_quantity\n    available\n    createdAt\n    updatedAt\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '29a48aa5b4a1c992c4616bb98136c4d8';

module.exports = node;
