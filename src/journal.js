
// business logic
export function Entry(title, body) {
  this.title = title;
  this.body = body;
  this.titleBody = title + body;
}

Entry.prototype.titleBody = function () {
  return this.body + this.title;
};

Entry.prototype.vowelCount = function() {
  var vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  var splitArray = this.titleBody.split("");
  var vowelCount = 0;
  splitArray.forEach(function(input) {
    if (vowels.includes(input)) {
      vowelCount++;
    } 
    
  });
  return vowelCount;
};

Entry.prototype.consonantCount = function() {
  var consonants = ["b", "B", "c", "C", "d", "D", "f", "F", "g", "G", "h", "H", "j", "J", "k", "K", "l", "L", "m", "M", "n", "N", "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T", "v", "V", "w", "W", "x", "X", "y","Y", "z", "Z"];
  var splitArray = this.titleBody.split("");
  var consonantCount = 0;
  splitArray.forEach(function(input) {
    if (consonants.includes(input)) {
      consonantCount++;
    }
    
  });
  return consonantCount;
};