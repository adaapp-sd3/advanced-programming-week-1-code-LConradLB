class Student {
    constructor(name, tutorGroup){
        this.name = name
        this.tutorGroup = tutorGroup
    }

    getName() {
        return this.name
    }

    getYearGroup(){
        this.yearGroup = this.tutorGroup.match(/\d+/g).map(Number)[0];
        return this.yearGroup
    }

    getForm(){
        this.form = this.tutorGroup.match(/[a-zA-Z]/g).join("");
        return this.form
    }
}

module.exports = Student