class EmployeePayrollData {
    // UC 9
    //getter and setter method
    get id(){
        return this._id;
    }

    set id(id){
        this._id = id;
    }

    get name(){
        return this._name;
    }

    set name(name){
        let nameRegex = new RegExp('^[A-Z]{1}[a-z]{3,15}$');
        console.log(nameRegex.test(name));
        if (nameRegex.test(name)) {
            this._name = name;
        } else {
            throw "Name is incorrect!";
        }
    }

    get department(){
        return this._department;
    }

    set department(department){
        this._department = department;
    }

    get salary(){
        return this._salary;
    }

    set salary(salary){
        this._salary = salary;
    }

    get note(){
        return this._note;
    }

    set note(note){
        this._note = note;
    }

    get startDate(){
        return this._startDate;
    }

    set startDate(startDate){
        this._startDate = startDate;
    }

    //method
    toString(){
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = !this.startDate ? "undefined" :
                        this.startDate.toLocalDateString("en-US", options);
        return "id=" + this.id + ", name='" + this.name + ", gender='" + this.gender +  
                ", profilePic='" + this.profilePic  + ", department=" + this.department +
                ", salary=" + this.salary + ", startDate=" + empDate + ",note=" + this.note;
    }
}

