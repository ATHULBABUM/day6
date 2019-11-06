// Create an Object:
var person = {
    firstName: "John",
    lastName : "Doe",
      language : "NO", 
  };
  // Change a Property:
  Object.defineProperty(person, "language", {
    value: "EN",
    writable : true,
    enumerable : true,
    configurable : true
  });
  // Enumerate Properties
  txt = "";
  for (var x in person) {
    txt += person[x] + "<br>";
  }
  document.getElementById("demo").innerHTML = txt;