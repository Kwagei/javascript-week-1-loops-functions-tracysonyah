//A word is given write a punction to tell if the word is a Palindrome
function palindrum_or_not(word) {
    palindrum = '';
    for(let i = word.length -1; i >= 0; i--) {

        palindrum += word[i];
    }
        if(word === palindrum){
            console.log('yes, palindrum');
        }
        else{
            console.log('no, not a palindrum')
        }


    console.log(palindrum);
}
palindrum_or_not('level');