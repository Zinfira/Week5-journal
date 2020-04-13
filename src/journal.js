
// business logic
export function Entry() {
  this.title = title;
  this.body = body;
}

Entry.prototype.vowelCount = function() {
  var vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  var splitBodyArray = this.body.split("");
  var vowelCount = 0;
  splitBodyArray.forEach(function(input) {
    if (vowels.includes(input)) {
      vowelCount++;
    }
  });
  return vowelCount;
};

Entry.prototype.consonantCount = function() {
  var consonants = ["b", "B", "c", "C", "d", "D", "f", "F", "g", "G", "h", "H", "j", "J", "k", "K", "l", "L", "m", "M", "n", "N", "p", "P", "q", "Q", "s", "S", "t", "T", "v", "V", "w", "W", "x", "X", "y","Y", "z", "Z"];
  var splitBodyArray = this.body.split("");
  var consonantCount = 0;
  splitBodyArray.forEach(function(input) {
    if (consonants.includes(input)) {
      consonantCount++;
    }
  });
  return consonantCount;
};