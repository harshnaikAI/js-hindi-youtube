const accountId=144553;
let accountEmail='harsh@google.com';
var accountPassword='12345';

accountCity='Jaipur';

//accountId=2; we cannot change const variable 

console.log(accountId);

accountEmail='rathod@gmail.com';
accountPassword='34435';
accountCity='Mumbai';
console.table([accountId,accountEmail,accountPassword,accountCity]);

/* 
 prefer not to use var because of issue in block scope and functional scope
*/