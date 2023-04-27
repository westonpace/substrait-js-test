import { SubstraitParser } from "substrait";

let x = new SubstraitParser(7);
let y = x.planToNode(7);
console.log(y);