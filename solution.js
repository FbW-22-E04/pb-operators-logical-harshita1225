let isDogBetter = true;
let isCatBetter = false;

//ex1
console.log("a) isDogBetter AND isCatBetter.",isDogBetter && isCatBetter);

console.log("b) isDogBetter OR isCatBetter.",isDogBetter || isCatBetter);

console.log("c) NOT etter AND isCatBetter.",!(isDogBetter && isCatBetter));

//ex2
let atoms = 10;
let sandGrains =20;
let starsInSky = 30;

console.log("3a) atoms is greater than starsInSky AND atoms is greater than sandGrains.", atoms > sandGrains && atoms > starsInSky? true : false);
//10>20 && 10>30, as both statements are false endresult is  false
console.log("3b) atoms is NOT equal to sandGrains", atoms != sandGrains ? true : false);
//10 not equal to 20 this is true

console.log("3c) starsInSky is less than sandGrains OR starsInSky is greater than atoms.", starsInSky < sandGrains || starsInSky > atoms ? true :false);
//30<20 or 30<10 both true , as  even one is true its true

console.log("3d) atoms is equal to starsInSky OR atoms is NOT equal to sandGrains", atoms == sandGrains || atoms!==sandGrains ? true:false);
//10=30 or 10 not equal to 20, one is true hence true
console.log("3e)atoms is greater than or equal to 10 AND sandGrains is less than or equal to 10.", atoms>=10 && sandGrains <=10 ? true :false);
//10>=10 is and 20<=10 , true and false is false(for and operator to be true both values should be true)
console.log("3f)atoms multiplied by starsInSky is less than 100 OR whether atoms multiplied by sandGrains is greater than 100.", (atoms*starsInSky)<=100 || (atoms*sandGrains)>100 ? true :false);
//10*20=200<100 or 10*30 >100 , false or true ,one is true end resutl is true