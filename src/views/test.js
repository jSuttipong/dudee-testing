let arrayA = [2,3,4,4,34,6,7,2,3,7,8,8,8,7,9,10,41,8]
console.log("Input : ",arrayA)
let unDuplicates = []
let duplicatesNumberList = []
let dupicatesNewList = []
let a = []
let b = []


function duplicates(arr) {
    return [...new Set(arr.filter((e, i, a) => a.indexOf(e) !== i))]
    }
duplicatesNumberList = duplicates(arrayA)
console.log("b:",b);

console.log("dupicales number: ", duplicatesNumberList);

for (let i = 0; i < arrayA.length; i++) {
    for (let l = 0; l < duplicatesNumberList.length; l++) {
        if (arrayA[i] == duplicatesNumberList[l]) {
            dupicatesNewList.push(arrayA[i])
        }
    }

}

let c = []
c = arrayA.filter((num, index, arr) => arr.indexOf(num) === arr.lastIndexOf(num));

console.log("new c : ",c.sort((a,b) => {return a-b} ));
console.log("new dupicatesNewList : ",dupicatesNewList.sort((a,b) => {return a-b} ));
let d = [...c,...dupicatesNewList]
console.log("new d:",d);
