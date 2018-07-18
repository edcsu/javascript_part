//This is function shows a word is an isogram or not
// Wriiten by Ssewannonda Keith Edwin
function wordIsogram(test_string){

    //Should be ot datatype string
    if (typeof test_string === undefined){
     return true;
     }
    //this variable will get reset later if the string is not an isogram
    var iso_string = true;
    //Lowercase the string so repeat letters won’t slip by. We could just as easily //uppercase eveyrthing.
    var low_case_str = iso_string.toLowerCase();
    //This is my borrowed letter-counting function. The empty object will hold //the count for instances of each character in a string
    var counts = {};
    //Loop through the string one letter at a time until we reach the end of the //string
    for (i = 0; i <= low_case_str.length; i++) {
    //each character gets stored in the variable letter when we loop through it
    
    var word_char = low_case_str.charAt(i);
    
    //if we see a letter again, add one to the count; otherwise, initialize the //count to 1
    
    if(counts[word_char]) {
     counts[word_char] = 1 + counts[word_char];
     } else {
     counts[word_char] = 1;
     }
    //now, if the count of any letter is greater than one, we set passing to false
    
    if(counts[word_char] > 1) {
     return iso_string == false;
     }
    
    }
    //if there’s more than one instance of a letter, passing should return as false, //and should return as true otherwise
    return iso_string;
    }

    //Test cases
 function test() {
    var cases=[ "one", "bone", "python", "Microsoft"];
    for (var i=0;i<cases.length;i++ ){
        console.log(cases[i]+": "+wordIsogram(cases[i]));
    }
}

test();