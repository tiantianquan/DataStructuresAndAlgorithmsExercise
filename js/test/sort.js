var assert = require('assert')

describe('Sort', function() {
  this.slow(-100)
  // var testData = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
  var testData = []
  for(var i =0;i<10000;i++){
    testData.push(Math.random()*10000)
  }
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

  describe('Merge', function() {
    it('Should return sorted result', function() {
      var sort = require('../sort/merge')
      var result = sort(testData.map(function(i) {
        return i
      }))
      exceptData.forEach(function(data, i) {
        assert.equal(data, result[i])
      })
    })
  })

  describe('Quick', function() {
    it('Should return sorted result', function() {
      var sort = require('../sort/quick')
      var result = sort(testData.map(function(i) {
        return i
      }))
      exceptData.forEach(function(data, i) {
        assert.equal(data, result[i])
      })
    })
  })

  describe('Array.sort',function(){
    it('Should return sorted result', function() {
      var result = testData.map(function(i) {
        return i
      }).sort(function(a,b){return a-b})
      exceptData.forEach(function(data, i) {
        assert.equal(data, result[i])
      })
    })
  })
})
