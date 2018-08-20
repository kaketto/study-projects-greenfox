// Create Student and Teacher classes
// Student
// - learn()
// - question(teacher) -> calls the teachers answer method
// Teacher
// - teach(student) -> calls the students learn method
// - answer()

'use strict';

class Student {
  
  learn() {
  }

  question(teacher) {
    teacher.answer();
  }
}

class Teacher {

  teach(student) {
    student.learn();
  }

  answer(){
  }
}
