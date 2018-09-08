export function convertNumberToText(dollarInNumbers) {
  let numberLetters: string[] = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let decimals: string[] = ['twenty', 'thirty', 'fouty,', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];  
  if (dollarInNumbers > 19) {
   let decimal: number = Math.floor(dollarInNumbers / 10)
   return decimals[decimal-2] + numberLetters[dollarInNumbers % 10];
  } else {
    return numberLetters[dollarInNumbers];
  }
}
 console.log(convertNumberToText(6));
