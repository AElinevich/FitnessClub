const sendForm = (form, state) => {
	const thanksBlock = document.getElementById('thanks'),
		thanksBlockText = thanksBlock.innerHTML,
		formInputs = form.querySelectorAll('input'),
		errorElement = document.createElement('p'),
		popupCollection = document.querySelectorAll('.popup'),
		callbackForm = document.getElementById('callback_form'),
		checkbox = form.querySelector('input[type = checkbox]');

	errorElement.textContent = 'Необходимо согласиться на обработку ваших персональных данных';
	errorElement.style.color = 'red';
	errorElement.style.marginTop = '15px';
	errorElement.classList.add('check-error');
// очистка инпутов
    const clearInputs = () => {
        formInputs.forEach(item => {
        item.value = '';
    })
}
	form.addEventListener('submit', event => {
		event.preventDefault();
		const data = {};

		if (checkbox && !checkbox.checked) {
			form.append(errorElement);
			return;
		}


		if (form.contains(errorElement)) {
			errorElement.remove();
		}

		formInputs.forEach(item => {
			if (item.type !== 'checkbox' && item.type !== 'radio') {
				data[item.name] = item.value;
			}
			if (item.type === 'radio' && item.checked) {
				data[item.name] = item.value;
			}
        });
        
        const formData = new FormData(form);
        if(form.getAttribute('data-calc') === 'end') {
            for(let key in state) {
                formData.append(key, state[key]);
            }
        }
		postData(data).then(response => {
			if (response.status !== 200) {
				throw new Error('status network not 200');
			}
		}).then(outputData()).then(() => {
			thanksBlock.innerHTML = thanksBlockText;
			thanksBlock.style.display = 'block';
			callbackForm.style.display = 'none';
			thanksBlock.addEventListener('click', event => {
				const target = event.target;
				if (target.closest('.overlay') || target.closest('.close_icon') || target.closest('.close-btn')) {
					popupCollection.forEach(item => {
						item.style.display = 'none';
					});
				}

			});
		}).catch(error => {
			const errText = thanksBlock.querySelector('.form-content');
			thanksBlock.style.display = 'block';
			thanksBlock.style.color = 'red';
            thanksBlock.style.fontSize = '3em';
			errText.textContent = 'Произошла ошибка!';
			thanksBlock.addEventListener('click', event => {
				const target = event.target;
				if (target.closest('.overlay') || target.closest('.close_icon') || target.closest('.close-btn')) {
					popupCollection.forEach(item => {
						item.style.display = 'none';
					});
				}

			});
            console.warn(error);
        })
        .finally(() => {
            clearInputs();
            setTimeout(() => {
                errorElement.remove()
            }, 5000)
        
        })  

	});

	const outputData = () => {
		formInputs.forEach(elem => {
			if (elem.type !== 'hidden' && elem.type !== 'radio') {
				elem.value = '';
			}
		});
	};

	const postData = body => fetch('./server.php', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body)
    });
};

export default sendForm; 