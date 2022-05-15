
interface Dalong<T> {
    age:T
}


class Demo implements Dalong<number>{
    age=33
    login(t:number):string{
        return "dalong"
    }
    constructor(public name:string) {
        this.name=name;
    }
}

export default Demo
export {
    Demo
}


type DefaultLogin<A> = A extends Dalong<infer E> ? E: A;

type myinfo = DefaultLogin<"rrr">


type myinfov2 = DefaultLogin<Demo>


let appdemo:myinfov2 


interface Base<T> {
    init(t:T):void
}

type Person = {
    name:string,
    age:number
}

class BaseLogin implements Base<Person> {
    init(t: Person): void {}
}

type CollectType<A> = A extends Base<infer T> ? T: unknown;

let mytype:CollectType<BaseLogin> = {
    name:"dd",
    age:33
}

class db {
    mongouri:string
    constructor(mongoURI:string) {
        this.mongouri=mongoURI;
    }
    createCollection(name:string):Promise<void>;
    createCollection(name:string,...options:string[]):Promise<void> | void {

    }
}