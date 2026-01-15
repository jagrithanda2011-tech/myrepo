// a = "happy"
// b = "new"
// c = "year"
// d = a + b + c
// console.log(d)
// e = "Happy World"

// console.log(e.length)
// name = "Johnie"
// console.log("My Name is " + name)
// news="Javascript is fun"
// console.log(news.slice(-6,-4))
// upper="MyNTuGYbhj"
// console.log(upper.toUpperCase())
// console.log(upper.toLowerCase())
// String = "I love Javascript"
// a = String.replace("Javascript","Coding")
// console.log(a)

//exercise1 

country = [
    ["Belgium","Brussels","Dutch, French, German","30689 km2","11492641","$50114","BE"],
    ["Germany","Berlin","Danish, Low German, Sorbian, Romani, Frisian","357,022 km²","83,491,249","$59,925","DE"],
    ["France","Paris","French","638,475 km²","68,635,943","$46,792","FR"],
    ["Sweden","Stockholm","Swedish","447,424 km²","10,587,710","€42,900","SE"]
]
console.log(country[0][4])

//exercise2
// function myfunction(obj){
   
//     console.log(obj[0],", population",obj[4])

// }

// myfunction(Belgium)
// myfunction(Germany)
// myfunction(France)
// myfunction(Sweden)

//exercise3
for(let i=0;i<country.length;i++){
    if(country[i+1][4]>country[i][4]){
       console.log(country[i])
    }
}