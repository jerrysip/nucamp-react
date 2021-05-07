class Student {
  constructor(name, email, community) {
    this.name = name;
    this.email = email;
    this.community = community;
  }
}

class Bootcamp {
  constructor(name, level, students = []) {
    this.name = name;
    this.level = level;
    this.students = students;
  }
  registerStudent(studentToRegister) {
    if (this.students.find((s) => s.email === studentToRegister.email)) {
      console.log(
        `The student ${studentToRegister.email} is already registered!`
      );
    } else {
      this.students.push(studentToRegister);
      console.log(
        `Registering ${studentToRegister.email} to the bootcamp ${this.name}.`
      );
    }
    console.log(this.students);
    return this.students;
  }
}

const webDevFund = new Bootcamp("Web Dev Fundamental", "Beginner");
const fullStack = new Bootcamp("Full Stack Web Dev", "Advance");

const James = new Student("James", "james@gmail.com", "Toronto");
const Patrick = new Student("Patrick", "patrick@yahoo.com");
const Patricia = new Student("Patricia", "pattycakes@aol.com", "Michigan");
const Jessica = new Student("Jessica", "Jesslove@gmail.com", "Atlanta");

fullStack.registerStudent(James);
fullStack.registerStudent(Patrick);
fullStack.registerStudent(Patricia);
fullStack.registerStudent(Jessica);
fullStack.registerStudent(Jessica);
