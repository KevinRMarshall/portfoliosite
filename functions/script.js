window.onload = function () {
	document.querySelector(".contact-form").addEventListener("submit", submitForm);
}

function submitForm(e) {
	e.preventDefault();

	let name = document.getElementById("userName").value;
	let email = document.getElementById("inputEmail").value;
	let message = document.getElementById("textArea").value;

	//validation

	let validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	let valid = true;
	if (name == "") {
		document.getElementById("invalidName").hidden = false;
		valid = false;
	} else {
		document.getElementById("invalidName").hidden = true;
	}
	if (email.match(validRegex)) {
		document.getElementById("invalidEmail").hidden = true;

	} else {
		document.getElementById("invalidEmail").hidden = false;
		valid = false;
	}

	if (valid == true) {
		document.querySelector(".contact-form").reset();
		sendEmail(name, email, message);
	}
}

function sendEmail(name, email, message) {

	Email.send({
		SecureToken: "2fe7a9b8-7fef-4a02-990c-f7716d6b3de4",
		To: "ramboknife1989@gmail.com",
		From: "ramboknife1989@gmail.com",
		Subject: `${name} sent you a message!`,
		Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,

	}).then((message) => window.location.href = 'thanks.html');

}