var expect = require("chai").expect;
var mocha = require("mocha");

var frames2string = require("../index.js");

describe('frames2string', function () {
  var exampleFrame1 = "All I want to do is rock";
  var exampleFrame2 = "with the rest of the world";
  var exampleFrame3 = "";
  var exampleFrame4 = "YER";

  describe('input params', function () {
    it("should revert to the default seperator if the second param is not a string", function (done) {
      var correct = "All I want to do is rock with the rest of the world";
      var result = frames2string([exampleFrame1, exampleFrame2], { 'well this is an': 'object' });
      expect(result).to.be.equal(correct);
      done();
    });

    it("should return an exmpty string if the first param is not an array", function (done) {
      var result = frames2string(Date.now());
      expect(result).to.be.equal("");
      done();
    });

    it("should return an exmpty string if the first param is missing", function (done) {
      var result;
      result = frames2string();
      expect(result).to.be.equal("");

      result = frames2string(null);
      expect(result).to.be.equal("");

      result = frames2string(undefined);
      expect(result).to.be.equal("");

      done();
    });
  });

  describe('with non-live text', function () {
    it("should just return the string if only one item in array", function (done) {
      var result = frames2string([exampleFrame1]);
      expect(result).to.be.equal(exampleFrame1, ' ');
      done();
    });
    it("should join text from two frames", function (done) {
      var correct = "All I want to do is rock with the rest of the world";
      var result = frames2string([exampleFrame1, exampleFrame2]);
      expect(result).to.be.equal(correct);
      done();
    });
    it("should join text from two frames with custom seperator", function (done) {
      var correct = "All I want to do is rock~with the rest of the world";
      var result = frames2string([exampleFrame1, exampleFrame2], '~');
      expect(result).to.be.equal(correct);
      done();
    });
    it("should not join empty frames with a seperator", function (done) {
      var correct = "All I want to do is rock with the rest of the world YER";
      var result = frames2string([exampleFrame1, exampleFrame2, exampleFrame3, exampleFrame4]);
      expect(result).to.be.equal(correct);
      done();
    });
  });
  describe('with live text', function () {
    it("should return a correct substring for a simple added word", function (done) {
      var s1 = "is why the public is not warm to him.";
      var s2 = "is why the public is not warm to him. The";
      var result = frames2string([s1, s2]);
      expect(result).to.be.equal(s2);
      done();
    })
  });
});