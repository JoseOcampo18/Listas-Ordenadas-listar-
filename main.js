import Person from "./person.js";
import Group from "./group.js";

let g = new Group();

let p1 = new Person("José", "20");
let p2 = new Person("Aimeé", "20");
let p3 = new Person("Arturo", "20");
let p4 = new Person("Alex", "21");
let p5 = new Person("Felipe", "20");

g._add(p1);
g._add(p2);
g._add(p3);
g._add(p4);
g._add(p5);

g._list();
