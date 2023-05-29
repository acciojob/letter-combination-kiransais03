function letterCombinations(input_digit) {
	//Complete the function
   let result = [];

   let digitToLetters = ['0','1','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];
	generateCombinations(input_digit, 0, "", digitToLetters, result);

	function generateCombinations(digits,index,combination,digitToLetters,result) {
	  if (index == digits.length) {
			  result.push(combination);
			  return;
		  }
  
		  
		  let letters = digitToLetters[digits.charAt(index) - '0'];

		  for (let i = 0; i < letters.length; i++) {
			  generateCombinations(digits, index + 1, combination + letters.charAt(i), digitToLetters, result);
             }
     }

	 return result;
}
  
  module.exports = letterCombinations;