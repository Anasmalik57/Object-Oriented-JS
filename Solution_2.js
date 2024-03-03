class Student {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.courses = []

    }
    enrolled(courseName) {
        this.courses.push(courseName);
        console.log(`${this.name} has enrolled in ${courseName}`);
    }
    showCourses() {
        console.log(`${this.name}'s enrolled courses: ${this.courses.join(', ')}`);
    }
}

class Admision {
    constructor() {
        this.students = []
    }
    studentEnrolled(student) {
        this.students.push(student);
        console.log(`${student.name} has been enrolled`);
    }
    assignCourse(student, course) {
        if (student instanceof Student && student.email && course) {
            student.enrolled(course)
        }
        else {
            console.log('Invalid student or course information');
        }
    }
    showEnrolledStudents() {
        console.log('Enrolled students:');
        this.students.forEach(student => {
            console.log(`- ${student.name} (${student.email})`);
        });
    }
}

const admissionOffice = new Admision();

const student1 = new Student('Anas', 'anas@gmail.com')
const student2 = new Student('Ikra', 'ikra@gmail.com')

admissionOffice.studentEnrolled(student1);
admissionOffice.studentEnrolled(student2)

admissionOffice.assignCourse(student1, 'Full Stack Web Developemnet')
admissionOffice.assignCourse(student2, 'Data Science Masters')

// student1.showCourses();
// student2.showCourses();

admissionOffice.showEnrolledStudents();