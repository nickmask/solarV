var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './db/auth.sqlite'
  },
  useNullAsDefault: true
})

// https://www.sqlite.org/lang_droptable.html
var dropSql = 'DROP TABLE IF EXISTS users;'

// https://www.sqlite.org/lang_createtable.html
// See also: https://www.sqlite.org/datatype3.html
var createSql = [
  'CREATE TABLE sunshine (',
  '  location VARCHAR(255) NOT NULL,',
  '  jan VARCHAR(255) NOT NULL,',
  '  feb VARCHAR(255) NOT NULL,',
  '  mar VARCHAR(255) NOT NULL,',
  '  apr VARCHAR(255) NOT NULL,',
  '  may VARCHAR(255) NOT NULL,',
  '  jun VARCHAR(255) NOT NULL,',
  '  jul VARCHAR(255) NOT NULL,',
  '  aug VARCHAR(255) NOT NULL,',
  '  sep VARCHAR(255) NOT NULL,',
  '  oct VARCHAR(255) NOT NULL,',
  '  nov VARCHAR(255) NOT NULL,',
  '  dec VARCHAR(255) NOT NULL,',
  '  fy VARCHAR(255) NOT NULL',
  ');'
].join(' ')

knex.raw(dropSql).then(function (resp) {
  return knex.raw(createSql)
}).then(function (resp) {
  process.exit()
})
