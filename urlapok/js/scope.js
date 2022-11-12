/* Global scope
var globalName = "Joe";

function something(){
  var globalName = "Jack";
      console.log(globalName);
}
something();

console.log(globalName);



let name = "Sanyi";
{
    let name = "Pisti";
    console.log(name);
}
console.log(name);
*/

// Const függvény változóit csak nagybetűvel írjuk megkülönböztetés végett! És Const függvény nem változtatható később!
const NAME = "Sanyi";
function test()
{
    const NAME = "Pisti";
    console.log(NAME);
}
test();
console.log(NAME);