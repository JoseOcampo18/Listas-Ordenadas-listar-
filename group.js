export default class Group{
    constructor(){
        this._start = null;
    }

    _add(person){
        if (this._start == null){
            this._start = person;
        }
        else{
            let aux = this._start;
            while(aux._next != null){
                aux = aux._next;
            }
            aux._next = person;
        }
    }

    _list(){
        console.log("En este grupo estan las siguientes personas: ");
        let aux = this._start;
        while(aux != null){
            console.log(`${aux._getName()} que tiene ${aux._getAge()} años de edad`);
            aux = aux._next;
        }
    }
}