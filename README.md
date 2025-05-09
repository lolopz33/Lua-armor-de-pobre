# Lua Armor Fake API

API simulada estilo Lua Armor, com autenticação via key e proteção simulada de scripts Lua.

Endpoint:
POST /api/protect

Headers ou query:
Authorization: 12345-abcde

Body JSON:
{
  "code": "print('Hello World')"
}
