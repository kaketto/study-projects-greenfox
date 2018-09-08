export function convertNumberToText(numberToConvert: number) {
  let numberText: string[] = [];
  let numbersLastDigit: string[] = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let decimals: string[] = [null, 'ten', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  // let tenSomething: string[] = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let digits: string[] = numberToConvert.toString().split('');
  digits[2] = numbersLastDigit[Number(digits[2])];
  digits[1] = decimals[Number(digits[1])]; 
  digits[0] = `${numbersLastDigit[Number(digits[0])]} hundred`; 
  return `${digits[0]} and ${digits[1]} ${digits[2]} dollars`;  
}

console.log(convertNumberToText(744));

