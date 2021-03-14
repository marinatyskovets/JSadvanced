var btn = {
	first: document.getElementById('first'),
	last: document.getElementById('last'),
	prev: document.getElementById('prev'),
	next: document.getElementById('next'),
	append: document.getElementById('append'),
	remove: document.getElementById('remove'),
	prepend: document.getElementById('prepend'),
}; 

var index = 0;

btn.first.addEventListener('click', function() {
	var items = getItems();
	index = 0;
	changeActive(items, index);
});

btn.last.addEventListener('click', function() {
	var items = getItems();
	index = items.length - 1;
	changeActive(items, index);
});

btn.prev.addEventListener('click', function() {
	var items = getItems();
	index = (index + items.length - 1) % items.length;
	changeActive(items, index);
});

btn.next.addEventListener('click', function() {
	var items = getItems();
	index = (index + 1) % items.length;
	changeActive(items, index);
});

btn.append.addEventListener('click', function() {
	var li = createLi("Добавить");
	document.getElementById("list").append(li);
});

btn.remove.addEventListener('click', function() {
	var items = getItems();
	items[items.length - 1].remove();
});

btn.prepend.addEventListener('click', function() {
	var li = createLi("Добавить в начало");
	document.getElementById("list").prepend(li);
});

function createLi(text) {
	var li = document.createElement("li");
	li.className = "list__item";
	li.textContent = text;

	return li;
}

function getItems() {
	var items = document.querySelectorAll("#list > li");

	return items;
}

function changeActive(items, index) {
	
	var active = document.querySelector('#list > li.active'); 

	if (active) active.classList.remove('active');

	items[index].classList.add('active');
}
