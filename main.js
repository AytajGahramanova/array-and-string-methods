// TASK - 1 --> Cumlelerin sayi //
// const text = "hello world!!!";
// const findCountOfSentence = (sentence) => {
//     let count = 0;
//     let isPrev = false;

//     for(let i = 0; i < sentence.length; i++){
//         let char = sentence[i];

//         if(char == "." || char == "!" || char == "?"){
//             if(!isPrev) count++;

//             isPrev = true;
//         } else{
//             isPrev = false;
//         }
//     }
//     return count;
// };
// console.log(findCountOfSentence(text));


// TASK - 2 --> Verilmiş hesabi ifadədə toplama (+), çıxma (-) və vurma (*) əməllərinin ümumi sayını müəyyənləşdirin //
// let text ="-1+2*3+a/4*7";
// const findOperationCount = (string) => {
//     let trimedText = string.split("");
//     let counter = 0;
//     trimedText.splice(0,1)
//     for(let i = 0; i < trimedText.length; i++){
//         if(trimedText[i] == "+" || trimedText[i] == "-" || trimedText[i] == "*" || trimedText[i] == "/"){
//             counter++;
//         }
//     }
//     return counter
// }
// console.log(findOperationCount(text));



// TASK - 3 --> Verilmiş mətn fraqmentində sözlərin sayını müəyyənləşdirin //
// function countWords(str) {
//     const newArr = str.split(' ');
//     return newArr.filter(item => item != ' ').length;
//   }
  
// console.log(countWords("hello world")); 



// TASK - 4 --> Baş hərfli sözlər sətri //
// function capitalizeLetter(string) {
//     const sentences = string.split(' ');
//     for(let i = 0; i < sentences.length; i++){
//         sentences[i] = sentences[i][0].toUpperCase() + sentences[i].slice(1);
// }
//     console.log(sentences.join(' '));
// }
// console.log(capitalizeLetter("introduction to algorithms"));



// TASK - 5 --> Verilmiş sətirdə birinci və sonuncu boşluq işarəsinin indekslərini çap edin //
// function spaceString (sentence){
//     console.log(sentence.indexOf(' '));
//     console.log(sentence.lastIndexOf(' '));
// }
// console.log(spaceString("I am programming on Python"));



// TASK - 6 --> her telebenin pointini 30 bal artirin //
// const students = [

//     { name: "Leyla", points: 500 },
  
//     { name: "Akif", points: 500 },
  
//     { name: "Fikret", points: 3000 },
  
//     { name: "Rashad", points: 500 },
  
//     { name: "Turkan", points: 1900 },
  
//     { name: "Sabir", points: 1000 },
  
//     { name: "Idris", points: 340 },
  
//     { name: "Nijat", points: 940 },
  
//     { name: "Ismet", points: 1780 },
  
// ];
// students.forEach(pointFunction);
// function pointFunction(item, index, arr){
//     arr[index] = item.points + 30;
// }
// console.log(students);
//-----------------------------------------------------------------------------
// const newArr = students.map((elem) => ({
//     ...elem,
//     points: elem.points + 30,
// }));
// console.log(newArr);



// TASK - 7 --> butun regemlerini yuvarlaqlashdirin //
// let numbers = [1.5, 2.56, 5.1, 12.33];
// arr = numbers.map((item) => Math.round(item))
// console.log(arr);



// TASK - 8 --> - isharesini / ile deyishin //
// let bdays = ['08-14', '10-04', '04-21', '08/14', '10/04', '04/21'];
// const newArr = bdays.map(elem => {
//     return elem.replace("-", "/");
// })
// console.log(newArr);