// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}!`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`);
    }
}

class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.forEach(element => { console.log(element) })
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`)
    }
}


/* ====== OBJECTS ====== */

const dan = new Instructor({
    name: "Dan",
    age: 45,
    location: "Jupiter, MO",
    specialty: "React",
    favLanguage: "JavaScript",
    catchPhrase: "Let's react to React!"
});

const jeff = new Instructor({
    name: "Jeff",
    age: 33,
    location: "Mars, FL",
    specialty: "SASS",
    favLanguage: "CSS",
    cathPhrase: "Let's get sassy with SASS!"
});

const dave = new Student({
    name: "Dave",
    age: 40,
    location: "Mesa, AZ",
    previousBackground: "Immigration Officer",
    className: "Full Stack Web",
    favSubjects: ["JavaScript", "CSS", "HTML"]
});

const eli = new Student({
    name: "Eli",
    age: 24,
    location: "Provo, UT",
    previousBackground: "High School",
    className: "App Development",
    favSubjects: ["React", "LESS", "Node.js"]
});

console.log(dan);
dan.demo("Node.js");
dan.grade(eli, "Node.js");

console.log(jeff)
jeff.demo("Semantic Elements");
jeff.grade(dave, "Semantic Elements");

console.log(dave);
dave.listsSubjects(dave.favSubjects);
dave.PRAssignment("history");

console.log(eli);
eli.listsSubjects(eli.favSubjects);
eli.PRAssignment("history");