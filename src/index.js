module.exports = function check(str, bracketsConfig) {

  let string = str;
  for (i = string.length; i >= 0; i--){
    for (let bracket = 0; bracket < bracketsConfig.length; bracket++){
      const bracketsPair = bracketsConfig[bracket].join('');
      if (string.includes(bracketsPair)) {
        string = string.replace(bracketsPair, '');
      }
    }
  }
  return string === "";
}

