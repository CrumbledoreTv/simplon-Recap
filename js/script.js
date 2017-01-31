function check() {
       var inputs = document.getElementsByTagName('input');

       for (var i = 0; i < inputs.length; i++) {

           if (inputs[i].type === 'radio' && inputs[i].checked) {

            if ( inputs[i].value === "multiplication"){
              multiplication();
            }else if (inputs[i].value === "division") {
              division();
            }else if (inputs[i].value === "addition") {
              addition();
            }else if (inputs[i].value === "soustraction") {
              soustraction();
              }
         }
       }
   }

function multiplication() {
  var a = document.getElementById("nombreA").value;
  var b = document.getElementById("nombreB").value;
  alert(a * b);
}

function division() {
  var a = document.getElementById("nombreA").value;
  var b = document.getElementById("nombreB").value;
  alert(a / b);
}

function addition() {
  var a = document.getElementById("nombreA").value;
  var b = document.getElementById("nombreB").value;
  alert(parseFloat(a) + parseFloat(b));
}

function soustraction() {
  var a = document.getElementById("nombreA").value;
  var b = document.getElementById("nombreB").value;
  alert(a - b);
}
