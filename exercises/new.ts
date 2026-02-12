//question1 
function square(a){
    return a*a;
}
let c = 2
console.log(square(c));

/*

Create a function to perform shallow object copies.
Shallow copy means that only primitives of the source are copied,
but any object properties still retain their original object references.
*/
const a = {
foo: "bar",
x: 4,
y: 8,
bar: 13.5
}
let b=a;

/* This function should make a shallow copy/clone of the source object.
Shallow copy means that only primitives of the source are copied, but any object properties
still retain their original object references. */
function shallowCopy(source)
{
// Your code here
    // return {
    //     foo:source.foo,
    //     x:source.x,
    //     y:source.y,
    //     z:source.z
    // };

    // let copy={};
    // for (let propertyName in source){
    //     copy[propertyName] = source[propertyName]

    // }
    // return copy;


    return {...source};
}


let copiedObject = shallowCopy(a);
copiedObject.foo = "This is not the original object";
copiedObject.x = 100;
console.log(a);
console.log(copiedObject);
console.log(a==copiedObject)