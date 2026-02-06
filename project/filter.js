const arr = [1,10,4,7];
const filterArr = arr.filter( num=> num%2===0);
console.log(filterArr);

const arr2 = [1,10,4,7];
const filterArr2 = arr2.map( num=> num*2);
console.log(filterArr2);
sum=0
for(let i=0;i<=arr.length-1;i++){
    sum+=arr[i];
}
console.log(sum);

const username = [{
name:"John",
age: 33
},
{
name:"Maxine",
age: 24
},
{
name:"Ted",
age: 12
},
];
const username2 = username.map(user => {return{name: user.name + " Bundy", age: user.age}});
console.log(username2);

// Convert users array from Exercise 1 to a new array, which has id property for each element in the array.
// The value of the id property should be the index number of the element in the array. Use map method
// (see documentation https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
// The output should be the following:

const username3 = [{
name:"John",
age: 33
},
{
name:"Maxine",
age: 24
},
{
name:"Ted",
age: 12
},
];
const username4 = username3.map((user, index) =>  ({name: user.name, age: user.age, id: index,}));
console.log(username4);
string="Jagrit"
for(let i=string.length-1;i>=0;i--){
    process.stdout.write(string[i]);
}

