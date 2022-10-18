function login() {
  let userName = prompt(`Good day.\nPlease enter the username below:`, `Lain`);
  
  if (userName === `Admin`) {
    let enteredPassword = prompt(`Greetings, Commander Ikari.\nPlease enter the password.`);

    if (enteredPassword === `TheMaster`) {
      // NB The password entered is not hidden;
      // couldn't find a way to hide it when using console prompt
      alert(`Welcome!`);
    } else if (enteredPassword === `` || enteredPassword === null) {
        alert(`Canceled`);
    } else {
      alert(`Wrong password.\nSystem shutdown.`);
    }
    
  } else if (userName === `` || userName === null) {
    alert(`Canceled`);
  } else {
    alert(`I don't know you`);
  }
}