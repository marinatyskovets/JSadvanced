(function () {
	var ul = document.createElement('ul');
	ul.setAttribute('class', 'list');
	document.getElementById('container').appendChild(ul);

	var text = prompt('Пожалуйста, введите фразу!', '');
	var list = text.split(" ");


	if (text === '' || text === null) {
		alert('Вы не ввели фразу!')
	} else {
		list.forEach(createLi);

		function createLi(element) {
			var li = document.createElement('li');
			li.setAttribute('class', 'list__item');
			ul.appendChild(li);
			li.innerHTML = element;
		}

		var li = document.getElementsByClassName('list__item');
		li[0].style.textTransform = 'uppercase';
		li[li.length - 2].style.textTransform = 'lowercase';
		li[li.length - 1].style.textTransform = 'lowercase';

		var pattern = new RegExp("а", "g");
		var result = text.match(pattern);
		alert('Количество букв "а" - ' + result.length);
	}
})();