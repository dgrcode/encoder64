var tape = require('tape')
var fs = require('fs')
var encoder64 = require('../')

var executeTests = function (err, file) {
  if (err) {
    console.log("Troubles reading the file 'fixtures/dummies.json'. Trace: ", err)
    process.exit(1)
  }

  var fixtures = JSON.parse(file)

  fixtures.map(function (each) {
    tape('For urls ' + each.name, function (t) {
      t.plan(2)

      t.equal(encoder64.encode(each.dummy), each.hash)

      t.equal(encoder64.decode(each.hash), each.dummy)

    })
  })

}

fs.readFile(__dirname + '/fixtures/dummies.json', 'utf8', executeTests)
