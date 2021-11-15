const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],
  findPerson: function (type, id) {
    let obj = {};
    school[type].forEach((person) => {
      if (person.id === id) obj = person;
    });
    return obj;
  },

  assignStudent: function (studentId, subject) {
    school.teachers.forEach((teacher) => {
      if (teacher.subjects.includes(subject)) {
        if (teacher.capacityLeft > 0) {
          teacher.capacityLeft--;
          teacher.students.push(school.findPerson("students", studentId));
        } else {
          console.log("Sorry,no available teachers left");
        }
      }
    });
  },
  assignTeachersSubject: function (teacherId, newSubject) {
    school.teachers.forEach((teacher) => {
      if (teacher.id === teacherId) {
        if (!teacher.subjects.includes(newSubject)) {
          teacher.subjects.push(newSubject);
        }
      }
    });
  },
  itsMuchTooLateNow: function (str) {
    if (str === "DELETE_ALL!!!") {
      this.teachers = "Ha Ha. you have just destroyed your own database!!!";
    }
  },
};
console.log(school.findPerson("students", 12));
school.assignStudent(12, "chemistry");
school.assignTeachersSubject(2, "!!!Js!!!");
console.log(school.teachers);
school.itsMuchTooLateNow("DELETE_ALL!!!");
console.log(school.teachers);
