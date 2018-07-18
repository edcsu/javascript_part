
// Wriiten by Ssewannonda Keith Edwin
/* daclaring function */

function numToWords(integer){

    /* Assigning values to each major numbers upto sextillion */
var NumEquivStr = [
    {value: 1000000000000000000000, str: "sextillion"},
    {value: 1000000000000000000, str: "quintillion"},
    {value: 1000000000000000, str: "quadrillion"},
    {value: 1000000000000, str: "trillion"},
    {value: 1000000000, str: "billion"},
    {value: 1000000, str: "million"},
    {value: 1000, str: "thousand"},
    {value: 100, str: "hundred"},
    {value: 90, str: "ninety"},
    {value: 80, str: "eighty"},
    {value: 70, str: "seventy"},
    {value: 60, str: "sixty"},
    {value: 50, str: "fifty"},
    {value: 40, str: "forty"},
    {value: 30, str: "thirty"},
    {value: 20, str: "twenty"},
    {value: 19, str: "nineteen"},
    {value: 18, str: "eighteen"},
    {value: 17, str: "seventeen"},
    {value: 16, str: "sixteen"},
    {value: 15, str: "fifteen"},
    {value: 14, str: "fourteen"},
    {value: 13, str: "thirteen"},
    {value: 12, str: "twelve"},
    {value: 11, str: "eleven"},
    {value: 10, str: "ten"},
    {value: 9, str: "nine"},
    {value: 8, str: "eight"},
    {value: 7, str: "seven"},
    {value: 6, str: "six"},
    {value: 5, str: "five"},
    {value: 4, str: "four"},
    {value: 3, str: "three"},
    {value: 2, str: "two"},
    {value: 1, str: "one"}
  ];

  /* initialise answer with empty string */
  var ans = '';
  /* for each value of the NumEquivStr object */
  for (var num of NumEquivStr) {
      /* testing number inserted against each case in my object */
    if(integer>=num.value){
        /* tesing number is less than 20 do this */
      if(integer<=20){
        ans += num.str;
        integer -= num.value;
        /* tesing number is greater than 0 do this */
        if(integer>0) ans += ' ';
      }else{
        var test_no =  Math.floor(integer / num.value); //testing number divided by number value of a given case
        var mod = integer % num.value; // modulus of testing number
        // recursive functionality starts
        if(mod>0){
          return numToWords(test_no) + ' ' + num.str +' ' + numToWords(mod);
        }else{
          return numToWords(test_no) + ' ' + num.str;
        }

      }
    }
  }
  return ans; // final value
}

   //Test cases
   function test() {
    var cases=[ 1, 25, 70, 100, 45879, 7885656];
    // going through test scenarios
    for (var i=0;i<cases.length;i++ ){
        console.log(cases[i]+": "+numToWords(cases[i]));
    }
}
