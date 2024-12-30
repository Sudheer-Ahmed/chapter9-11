
// Task 1: Arithmetic Operations
// let a = 10;
// let output = `Result:<br>`;
// output += `The value of a is: ${a}<br>`;

// a++;
// output += `The value of a is: ${a}<br>`;
// output += `The value of a is: ${a}<br>`;

// a++;
// output += `The value of a is: ${a}<br>`;
// output += `The value of a is: ${a}<br>`;

// a--;
// output += `The value of a is: ${a}<br>`;
// output += `The value of a is: ${a}<br>`;

// a--;
// output += `The value of a is: ${a}<br>`;

// // Displaying the result 
// document.getElementById("result").innerHTML = output;

// Task 2: Explanation of Output
// let a = 2, b = 1;
// let result = --a - --b + ++b + b--;

// // Explanation of the result
// let explanation = `
//     a is ${a} <br>
//     b is ${b} <br>
//     result is ${result} <br><br>
//     Explanation: <br>
//     --a means a is decremented to 1, so now a is 1 <br>
//     --b means b is decremented to 0, so now b is 0 <br>
//     --a - --b is 1 - 0, which is 1 <br>
//     ++b means b is incremented to 1 before use, so now b is 1 <br>
//     --a - --b + ++b is 1 + 1, which is 2 <br>
//     b-- means b is used as 1 and then decremented to 0 <br>
//     --a - --b + ++b + b-- is 2 + 1, which is 2 <br>`;

// document.getElementById("task2").innerHTML = `<h2>Task 2: Explanation of Output</h2>${explanation}`;

// // Task 3: Greet the User
// let userName = prompt("Enter your name:");
// let greeting = `Hello, ${userName}!`;
// document.getElementById("task3").innerHTML = `<h2>Task 3: Greet the User</h2>${greeting}`;


// Task 5: Multiplication Table
// function displayMultiplicationTable(number) {
//     let result = '';
//     for (let i = 1; i <= 10; i++) {
//         result += `${number} x ${i} = ${number * i}\n`;
//     }
//     alert(result); // Displaying the result using an alert for simplicity
// }

// let userNumber = prompt("Enter a number to display its multiplication table (default is 5):");
// userNumber = userNumber ? parseInt(userNumber) : 5;
// displayMultiplicationTable(userNumber);



// // Task 6: Calculate and Display Subject Marks
// function calculateResults() {
//     const subjects = [];
//     subjects.push(prompt("Enter the name of the first subject:"));
//     subjects.push(prompt("Enter the name of the second subject:"));
//     subjects.push(prompt("Enter the name of the third subject:"));

//     const totalMarks = 100;
//     const obtainedMarks = [];
//     obtainedMarks.push(parseInt(prompt(`Enter the obtained marks for ${subjects[0]}:`)));
//     obtainedMarks.push(parseInt(prompt(`Enter the obtained marks for ${subjects[1]}:`)));
//     obtainedMarks.push(parseInt(prompt(`Enter the obtained marks for ${subjects[2]}:`)));

//     const totalObtainedMarks = obtainedMarks.reduce((a, b) => a + b, 0);
//     const totalMaxMarks = totalMarks * subjects.length;
//     const percentage = (totalObtainedMarks / totalMaxMarks) * 100;

//     let resultTable = `
//         <table border="1">
//             <tr>
//                 <th>Subject</th>
//                 <th>Total Marks</th>
//                 <th>Obtained Marks</th>
//                 <th>Percentage</th>
//             </tr>`;
//     subjects.forEach((subject, index) => {
//         const subjectPercentage = (obtainedMarks[index] / totalMarks) * 100;
//         resultTable += `
//             <tr>
//                 <td>${subject}</td>
//                 <td>${totalMarks}</td>
//                 <td>${obtainedMarks[index]}</td>
//                 <td>${subjectPercentage.toFixed(2)}%</td>
//             </tr>`;
//     });
//     resultTable += `
//             <tr>
//                 <td>Total</td>
//                 <td>${totalMaxMarks}</td>
//                 <td>${totalObtainedMarks}</td>
//                 <td>${percentage.toFixed(2)}%</td>
//             </tr>
//         </table>`;

//     document.body.innerHTML = resultTable;
// }

// calculateResults();


