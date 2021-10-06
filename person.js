export default class Person{

    constructor(name,age){
        this._name = name;
        this._age = age;
        this._next = null;
    }

    _getName(){
        return this._name;
    }

    _getAge(){
        return this._age;
    }

}