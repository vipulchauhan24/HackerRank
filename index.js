function gradingStudents(grades) {
  // Write your code here
  let len = grades.length;
  grades.forEach((num,idx) => {
    let number = num;
    let count = 0;
    if(number >= 38){
      while(number % 5 != 0 && count < 2){
        number++;
        count++;
      }
      if(number % 5 === 0){
        grades[idx] = number;
      }
    }
  });

  return grades;
}
console.log(gradingStudents([73,67,38,33]))