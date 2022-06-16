const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
	e.preventDefault();
	const input = document.querySelector('input');
	const alertMSG = document.querySelector('.alert-msg');
	const regx = /\S+@\S+\.\S+/;
	if (!regx.test(input.value)) {
		alertMSG.textContent = 'Please provide a valid email';
		input.classList.add('alert');
		input.focus();
	} else {
		alertMSG.textContent = '';
		input.value = '';
		input.classList.remove('alert');
	}
});
