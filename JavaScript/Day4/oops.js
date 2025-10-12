class Animal{
    constructor(){
        console.log("Object Created...!");
    }
    eat(){
        console.log("I'm Eating");
    }
    sleep(){
        console.log("I'm Sleeping");
    }
    run() {
        console.log("I'm Running");
    }
}
let dog=new Animal();
dog.sleep()
dog.run()
dog.eat()