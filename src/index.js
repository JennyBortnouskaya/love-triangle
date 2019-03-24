
module.exports = function getLoveTrianglesCount(preferences = []) {
  let countLove = 0; 
  preferences.forEach(function(element, index) { 
  var love1 = preferences[element - 1]; 
  var love2 = preferences[love1 - 1]; 
  var love3 = preferences[love2 - 1]; 
  
  if(element != love1 && love1 != love2 && love3 == element) { 
  countLove++; 
  preferences[element - 1] = undefined; 
  preferences[love1 - 1] = undefined; 
  preferences[love2 - 1] = undefined; 
  } 
  }) 
  return countLove;
  }; 