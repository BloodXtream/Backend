class Student {
    constructor(name, rollNo) {
        this.name = name
        this.rollNo = rollNo
        this.subjects = []
    }
    addSubject(subject) {
        this.subjects.push(subject)
    }
    calculateAverage() {
        const total = this.subjects.reduce((acc, val) => acc + val.marks, 0)
        return total / this.subjects.length
    }
    printReport() {
        console.log(`Report for ${this.name} (Roll No: ${this.rollNo})`)
        this.subjects.forEach((subj) => {
            console.log(`${subj.name}: ${subj.marks}`)
        })
        console.log(`Average Marks: ${this.calculateAverage().toFixed(2)}`)
    }
}

class Subject {
    constructor(name, marks) {
        this.name = name
        this.marks = marks
    }
}


const s1 = new Student("Pragyanam Tiwari", 101)
s1.addSubject(new Subject('Math', 83))
s1.addSubject(new Subject('Sience', 63))
s1.addSubject(new Subject('Biology', 43))
s1.addSubject(new Subject('Chemeisty', 93))
s1.addSubject(new Subject('Physics', 83))
s1.addSubject(new Subject('OOPS', 100))

const s2 = new Student("Tanu Tiwari", 100)
s2.addSubject(new Subject('Math', 100))
s2.addSubject(new Subject('Sience', 100))
s2.addSubject(new Subject('Biology', 100))
s2.addSubject(new Subject('Chemeisty', 100))
s2.addSubject(new Subject('Physics', 100))
s2.addSubject(new Subject('OOPS', 100))
