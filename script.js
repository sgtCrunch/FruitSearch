//Dom comands to select input field and unordered list
const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

//Database for fruits
const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 
				'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 
				'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 
				'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 
				'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 
				'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 
				'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 
				'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 
				'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 
				'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 
				'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 
				'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 
				'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

/*
	Function takes in a string and returns an array with all fruits that include the given string
*/
function search(str) {

	if(str.length === 0) return [];

	return fruits.reduce((results, fruit) => {
		if(fruit.toLowerCase().includes(str.toLowerCase())) results.push(fruit);
		return results;
	}, []);
}

/*
	Function used to when a "keyup" event is triggered. It will call search to get all fruits containing the 
	string in the input field and then add them to a dropdown div on the front-end
*/
function searchHandler(e) {
	showSuggestions(search(input.value), input.value);
}

/*
	Function takes in an array of results and the current input value and adds them as list elements to the drop down div
	It also checks to see if the results are empty to make drop down invisible
*/
function showSuggestions(results, inputVal) {

	if(results.length === 0) {
		suggestions.parentElement.classList.add("invisible");
	}
	else{
		suggestions.parentElement.classList.remove("invisible");
	}

	suggestions.innerHTML = "";

	results.forEach(fruit => {
		const li = document.createElement("li");
		li.innerHTML = fruit;
		suggestions.append(li); 
	});

}

/*
	Function used to when a "click" event is triggered. It checks to see if the user clicked outside of dropdown and 
	the input field, if they did then it will make the dropdown invisible. It also checks to see if user clicked on
	a list element, if they did then it will set the input text to the list element text and then set the dropdown to invisible.
*/
function useSuggestion(e) {
	
	if(e.target.tagName === "HTML" || e.target.tagName === "BODY") {
		suggestions.parentElement.classList.add("invisible");
	}
	else if(e.target.parentElement.parentElement.className === "suggestions"){
		input.value = e.target.innerText;
		suggestions.parentElement.classList.add("invisible");
	}
	
}

//Adding event listeners for clicks and keystrokes
document.addEventListener('click', useSuggestion);
input.addEventListener('keyup', searchHandler);