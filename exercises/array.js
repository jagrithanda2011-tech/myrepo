// //question1
// num1 = 10;
// num2 = 20;
// num3 = 30;
// num4 = 40;
// num5 = 50;
// count= 5;
// sum=num1+num2+num3+num4+num5;
// console.log("The average is ", sum/count)

// //question2(a)
// arr = [1,2,3,4,5,6,7,8,9,10];
// sum=0
// for(let i = 0;i<arr.length;i++){
//     sum+=arr[i];

// }
// console.log(sum/arr.length)
// //question2(b)
// function calculateAverage(arr){
//     sum=0;
//     for(let i = 0;i<arr.length;i++){
//         sum+=arr[i];
//     }
//     console.log(sum/arr.length);
// }
// calculateAverage([1,2,3,4,5,6,7,8,9,10])

//question3 
students = [{name:"Joe", Studentid: 1234, Grades:[1,2,3,4,5]}]
function calculateStudentAverage(students){
    sum=0;
    for (let i=0;i<students.length;i++){
        let grades=students[i].Grades;
        for(let j=0;j<grades.length;j++){
            sum+=grades[j];
        }
    }
    console.log(students[0].name,"(ID:",students[0].Studentid,")","has a GPA of ",sum/(students.length*5));
}
calculateStudentAverage(students)

//question 4
students = [{name:"Joe", Studentid: 1234, Grades:[1,2,3,4,5]}]
stdents2 = [{name:"Mary", Studentid: 5678, Grades:[2,3,4,5,5]}]

function calculateStudentAverage(student){
    sum=0;
    for (let i=0;i<student.length;i++){
        let grades=student[i].Grades;
        for(let j=0;j<grades.length;j++){
            sum+=grades[j];
        }
    return sum/(student.length*5);
    }
}



function printStudentGPAInfo(name){
    let avg = calculateStudentAverage(name);
    console.log("the average of " + name[0].name + " is " + avg);
}

printStudentGPAInfo(students);
printStudentGPAInfo(stdents2);
//question 5


