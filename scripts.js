function login() {
  let userName = prompt(`Good day.\nPlease enter the username below:`, `Lain`);
  
  if (userName === `Admin`) {
    let enteredPassword = prompt(`Greetings, Commander Ikari.\nPlease enter the password.`);

    if (enteredPassword === `TheMaster`) {
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