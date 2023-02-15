const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {

	if(str.length === 0) return [];

	return fruits.reduce((results, fruit) => {
		if(fruit.toLowerCase().includes(str.toLowerCase())) results.push(fruit);
		return results;
	}, []);
}

function searchHandler(e) {
	showSuggestions(search(input.value), input.value);
}

function showSuggestions(results, inputVal) {

	if(results.length === 0) {
		suggestions.parentElement.classList.add("invisible");
	}
	else{
		suggestions.parentElement.classList.remove("invisible")
	}
	suggestions.innerHTML = "";
	results.forEach(fruit => {
		const li = document.createElement("li");
		li.innerHTML = fruit;
		suggestions.append(li); 
	});
}

function useSuggestion(e) {
	console.log(e.target.tagName);
	if(e.target.tagName === "HTML" || e.target.tagName === "BODY") {
		suggestions.parentElement.classList.add("invisible");
	}
	else if(e.target.parentElement.parentElement.className === "suggestions"){
		input.value = e.target.innerText;
		showSuggestions(search(input.value), input.value);
	}
	
}

document.addEventListener('click', useSuggestion);
input.addEventListener('keyup', searchHandler);
//input.addEventListener('focusout', () => {suggestions.parentElement.classList.add("invisible")});
