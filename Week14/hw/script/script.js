function buttonClicked() {
	console.log("It Works!");
	// get the username value from the form
	var username = document.getElementById("username");
	var usernameToShow = username.value;

	// display text on page
	var textToShow = document.getElementById("usernameToShow");
	textToShow.innerHTML = usernameToShow;

}
