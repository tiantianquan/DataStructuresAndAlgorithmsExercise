var assert = require('assert')

describe('Sort', function() {
  var testData = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
  var exceptData = testData.map(function(i) {
    return i
  }).sort(function(a, b) {
    return a - b
  })
  describe('Bubble', function() {
    it('Should return sorted result', function() {
      var sort = require('../sort/bubble')
      var result = sort(testData.map(function(i) {
        return i
      }))
      exceptData.forEach(function(data, i) {
        assert.equal(data, result[i])
      })
    })
  })

  describe('Select', function() {
    it('Should return sorted result', function() {
      var sort = require('../sort/select')
      var result = sort(testData.map(function(i) {
        return i
      }))
      exceptData.forEach(function(data, i) {
        assert.equal(data, result[i])
      })
    })
  })
  describe('Insert', function() {
    it('Should return sorted result', function() {
      var sort = require('../sort/insert')
      var result = sort(testData.map(function(i) {
        return i
      }))
      exceptData.forEach(function(data, i) {
        assert.equal(data, result[i])
      })
    })
  })
})
