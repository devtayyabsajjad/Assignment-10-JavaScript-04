//2 What will be the result for these expressions?

5>4  //true because 5 is greater than 4
("apple" > "pineapple") //false because in comparison a is smaller than p in dictionary and A is smaller than a
("2" > "12") //true here like absove same 2 is greater than second value first character 1 if both would be same then we will look to second character
undefined == null;  //true they are equal in value
undefined === null;  //false the are not equal in type
(null == "\n0\n") //false because null is nothing  \n is escape sequence
null === +"\n0\n" //false becaue it is not equal in value and type
  

//3 What are the final values of all variables a, b, c and d after the code below?
// let a = 1, b = 1;
// let c = ++a; // ?
// let d = b++; // ?
//solution below:
let a = 1, b = 1;
let c = ++a; //value of c will be 2 and a also 2 as increment is done first
let d = b++; //value of d will be 1 as increment done after assigning and b will be 2


//4 What are the values of a and x after the code below?
// let a = 2;
// let x = 1 + (a *= 2);
//solution below:
let a = 2;
let x = 1 + (a *= 2); //in bracket a value becomes 4 so a=4 and x=5(1+4)


//5 Here’s a code that asks the user for two numbers and shows their sum.
// It works incorrectly. The output in the example below is 12 (for default prompt values).
// Why? Fix it. The result should be 3.
// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);
// alert(a + b); // 12
// solution below:
let a = +prompt("First number?");
let b = +prompt("Second number?");

alert(a + b); //in bracket a value becomes 4 so a=4 and x=5(1+4)


//6  Rewrite this if using the conditional operator '?':
// let result;
// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }
// solution below:
(a+b < 4) ? result = 'Below' : result = 'Over';
 

//7 Rewrite 'if..else' into '?'
// Rewrite if..else using multiple ternary operators '?'.
// For readability, it’s recommended to split the code into multiple lines.
// let message;
// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }
//solution below:
let message;
(login == 'Employee') ? message = 'Hello' :
(login == 'Director') ?  message = 'Greetings' :
(login == '') ?  message = 'No login' : message = '';


//8  What is the code below going to output?
// alert( null || 2 || undefined );
//solution below:
alert( null || 2 || undefined );  //2 as null and undefined has no value and it has 2 that why output would be 2


//9 What will the code below output?
// alert( alert(1) || 2 || alert(3) );
// solution below:
alert(alert(1) || 2 || alert(3) );  //first alert 1 will execute than alert 2 when it see first is true or has some value does not check second


//10 What is this code going to show?
// alert( 1 && null && 2 );
//solution below:
alert( 1 && null && 2 ); //here null would be printed here first falsy value will printed



//11 What will this code show?
// alert( alert(1) && alert(2) );
// solution belo:
alert( alert(1) && alert(2) ); // it will enter in the bracket and will alert 1 and then check between both alerts that would be undefined and that would be alert     


//12 What will the result be?
// alert( null || 2 && 3 || 4 );
// solution below:
alert( null || 2 && 3 || 4 );  // output would be 3 reason:--null or 2 would be 2 beacue true returns first truth value and 3  or 4 would be 3 and then 2 and 3 would be check when and sees 2 is true then it will automatically prints the second value null is treats as false



//13 Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT !, the second one – without it.
// solution 1:
let age = parseInt(prompt("Enter your age"));
if(age >=14 && age <=90){
    alert("your not eligible");
}
else{
    alert("Welcome");
}
//solution 2:
let age = parseInt(prompt("Enter your age"));
if(!(age >=14 && age <=90)){
    alert("welcome");
}
else{
    alert("not eligible");
}


//14 Which of these alerts are going to execute?
// What will the results of the expressions be inside if(...)?
// if (-1 || 0) alert( 'first' );
// if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert( 'third' );
// solution below:
if (-1 || 0) alert( 'first' );  //condition true this would execute
if (-1 && 0) alert( 'second' );    //condition false will not execute
if (null || -1 && 1) alert( 'third' );   //condition true this would execute


//15 Write the code using if..else which would correspond to the following switch:
// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;
//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;
//   default:
//     alert( 'We hope that this page looks ok!' );
// }
// solution below:
let a = "browser";
if(a == "Edge"){
    alert( "You've got the Edge!" );
}
else if(a == "Chrome" || a == "Firefox" || a == "Safari" || a == "Opera" ){
    alert( 'Okay we support these browsers too' );

}
else{
    alert( 'We hope that this page looks ok!' );
}


//16 Rewrite the code below using a single switch statement:
// let a = +prompt('a?', '');
// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }
// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }
// solution below:
let a = +prompt('a?', ''); // + is doing the work or Number.parseInt
switch (a) {
    case (0):
        alert(0);
        break;
    case (1):
        alert(1);
        break;
    case (2):
        alert(2);
        break;
    default:
        alert("default");
        break;

}
//And has highest precednce then or precedence
//Null is treated as false value in boolean expression




