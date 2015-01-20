{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "id": "/",
  "type": "object",
  "properties": {
    "uuid": {
      "id": "uuid",
      "type": "string"
    },
    "nickName": {
      "id": "nickName",
      "type": "string"
    },
    "domain": {
      "id": "domain",
      "type": "string"
    },
    "active": {
      "id": "active",
      "type": "boolean"
    },
    "userName": {
      "id": "userName",
      "type": "string"
    },
    "departament": {
      "id": "departament",
      "type": "string"
    },
    "uuidSup": {
      "id": "uuidSup",
      "type": "string"
    },
    "email": {
      "id": "email",
      "type": "string"
    },
    "tel": {
      "id": "tel",
      "type": "string"
    },
    "photo": {
      "id": "photo",
      "type": "string"
    },
    "UENs": {
      "id": "UENs",
      "type": "array",
      "items": {

        "type": "string"
      }
    },
    "roles": {
      "id": "roles",
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "passwords": {
      "id": "passwords",
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "expirate": {
      "id": "expirate",
      "type": "integer"
    },
    "expMotive": {
      "id": "expMotive",
      "type": "integer"
    },
    "permissions": {
      "id": "permissions",
      "type": "object",
      "properties": {}
    }
  },
  "required": [
    "uuid",
    "nickName",
    "domain",
    "active",
    "userName",
    "email",
    "tel",
    "UENs",
    "roles",
    "passwords",
    "expirate",
  ]
}

