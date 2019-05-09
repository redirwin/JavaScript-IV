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
    sprintChallenge(student, subject) {
        console.log(`${student.name} has begun sprint challenge on ${subject}.`);
    }
}

class ProjectManager extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel stand up time!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`)
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

const max = new ProjectManager({
    name: "Max",
    age: 27,
    location: "Austin, TX",
    gradClassName: "Web 95",
    favInstructor: jeff
})

const april = new ProjectManager({
    name: "April",
    age: 32,
    location: "Minneapolis, MN",
    gradClassName: "Mobile Dev 54",
    favInstructor: dan
})


/* ====== OBJECT TESTS ====== */

console.log(dan);
dan.demo("Node.js");
dan.grade(eli, "Node.js");

console.log(jeff)
jeff.demo("Semantic Elements");
jeff.grade(dave, "Semantic Elements");

console.log(dave);
dave.listsSubjects(dave.favSubjects);
dave.PRAssignment("history");
dave.sprintChallenge(dave, "LESS");

console.log(eli);
eli.listsSubjects(eli.favSubjects);
eli.PRAssignment("history");
eli.sprintChallenge(eli, "Advanced HTML");

console.log(max);
max.standUp("Channel 12");
max.debugsCode(dave, "Lambda Classes");

console.log(april);
april.standUp("Disney Channel");
april.debugsCode(dave, "The Enigma Machine");