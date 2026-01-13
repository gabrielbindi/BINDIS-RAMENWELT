function validateForm(){

  let fname = document.forms["contactForm"]["fname"].value;
  let lname = document.forms["contactForm"]["lname"].value;
  let email = document.forms["contactForm"]["email"].value;
  let sv_number = document.forms["contactForm"]["sv_number"].value;

  if (fname === "") {
    alert("Name muss ausgefüllt sein!");
    return false;
  }

  if (lname === "") {
    alert("Nachname muss ausgefüllt sein!");
    return false;
  }

  if (email === "") {
    alert("Email muss ausgefüllt sein!");
    return false;
  }

  if (sv_number === "") {
    alert("SV Nummer muss ausgefüllt sein!");
    return false;
  }

  return true;
}
