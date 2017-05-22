(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Journal(name, entry) {
  this.name = name;
  this.entry = entry;
}

Journal.prototype.preview = function() {
  var result = []
  var temp = this.entry.split(" ");
  for(var i = 0; i <= 8; i++){
    result.push(temp[i]);
  }
  return result.join(" ")
};

Journal.prototype.count = function() {
  words = this.entry.split(" ");
  return words.length;
};

Journal.prototype.letters = function() {
  var prepLetters = this.entry.toLowerCase().split("");
  vowelNum = 0
  conNum = 0
  vowels = ['a', 'e', 'i', 'o', 'u']
  prepLetters.forEach(function(letter){
    if (vowels.includes(letter)){
      vowelNum += 1
    }else{
      conNum +=1
    }
  })
  total = vowelNum + conNum
  return ' *useful information* This entry contains ' + total + ' letters, of which ' + vowelNum + ' are vowels and ' + conNum + ' are consonants.';
};

exports.journalModule = Journal;

},{}],2:[function(require,module,exports){
var Journal = require('./../js/journal.js').journalModule;

$(document).ready(function() {
  $('#journal-form').submit(function(event){
    event.preventDefault();
    var name = $('#name').val();
    var entry = $('#entry').val();
    var newEntry = new Journal (name, entry);

    $("ul#entries").append("<li><span class='clickEntry'>"+ newEntry.name + ", " + newEntry.count() + " words.</li>");
    $("ul#entries").append("<p>" + newEntry.preview() + "...</p>");

    $('.clickEntry').last().click(function(){
        $("#show-entry").show();
        $("#show-entry h2").text(newEntry.name);
        $(".fullEntry").text(newEntry.entry);
        $(".letters").text(newEntry.letters());
    });
  });

});

},{"./../js/journal.js":1}]},{},[2]);
