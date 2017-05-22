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
