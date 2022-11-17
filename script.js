const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phonenumber = document.getElementById('phonenumber');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
let phno = 123456789;

form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const phonenumberValue = phonenumber.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(usernameValue === '') {
		// to prevent username from being blank
		setErrorFor(username, 'Username cannot be blank');
	} 
	else {
		setSuccessFor(username);
	}
	if(phonenumberValue === '') {
		setErrorFor(phonenumber, 'phone number cannot be blank');
		// to prevent phone number from being blank
	 }else if(phonenumberValue === '123456789'){
		// to  prevent phonenumber from being 123456789
		setErrorFor(phonenumber, 'phone number cannot be 123456789');
	 }
	else {
		setSuccessFor(phonenumber);
	}
	
	if(emailValue === '') {
		// to prevent email from being blank
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		// to prevent password from being blank
		setErrorFor(password, 'Password cannot be blank');
	} else if(passwordValue === 'password'){
		// to prevent password from being password
		setErrorFor(password, 'Password cannot be password');
	}
	 else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		// to check whether both passwords match
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

