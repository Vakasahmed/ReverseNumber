function reverseNumber(){
let x =32243;
let rev=0;
let lastDigit;
while(x!=0){
    lastDigit = x%10;
    rev = rev*10 + lastDigit;
    x = Math.floor(x/10);
}

console.log(rev);
}
reverseNumber();
