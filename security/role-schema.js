{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "id": "/",
  "type": "object",
  "properties": {
    "urid": {
      "id": "urid",
      "type": "string"
    },
    "nombre": {
      "id": "nombre",
      "type": "string"
    },
    "description": {
      "id": "description",
      "type": "string"
    },
    "uen": {
      "id": "uen",
      "type": "string"
    },
    "priority": {
      "id": "priority",
      "type": "integer"
    },
    "permissions": {
      "id": "permissions",
      "type": "object",
      "properties": {}
    }
  },
  "required": [
    "urid",
    "nombre",
    "description",
    "uen",
    "priority",
    "permissions"
  ]
}
