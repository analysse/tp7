// javascript for tp7

//function to load a file from the URL "fromFile" into the object identified by "whereTo"
function loadFileInto(fromFile, whereTo) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
			if ((this.readyState == 4) && (this.status == 200)) {
				document.querySelector(whereTo).innerHTML = this.responseText;
				
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("Error: " + this.responseText);
			}
		
	} // end ajax.onreadystatechange function

	// initiate request and wait for response
	ajax.send();

}

//new recipe object
function Recipe(recipeName, contributorName, imageURL, ingredientsURL, equipmentURL, directionsURL) {
  
  this.recipeName = recipeName;
  this.contributor = contributorName;
  this.imageURL = imageURL;
  this.ingredients = ingredientsURL;
  this.equipment = equipmentURL;
  this.directions = directionsURL;
  
  this.displayRecipe = function() {
    
    document.querySelector("#titleBanner h1").innerHTML = this.recipeName;
    document.querySelector("#contributor").innerHTML = this.contributor;
    document.querySelector("#titleBanner").style.backgroundImage = "url(" + this.imageURL + ")";
    loadFileInto(this.ingredients, "#ingredients ul");  
    loadFileInto(this.equipment, "#equipment ul");  
    loadFileInto(this.directions, "#directions ol");  

  }
}

FluffyFrenchToast = new Recipe(
  "Fluffy French Toast", 
  "Analysse Palomares", 
  "https://images.unsplash.com/photo-1639108094328-2b94a49b1c2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80", 
  "ingredients.html", 
  "equipment.html", 
  "directions.html"
);

IcedMatchaLatte = new Recipe(
  "Iced Matcha Latte", 
  "Nova Shtrikman", 
  "https://images.unsplash.com/photo-1631308491952-040f80133535?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWF0Y2hhJTIwbGF0dGV8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60", 
  "matcha-ingredients.html", 
  "matcha-equipment.html", 
  "matcha-directions.html"
);

RosemaryBread = new Recipe(
  "Super Easy Rosemary Bread", 
  "Morgan Coffroth", 
  "https://images.unsplash.com/photo-1621265040752-58815f16ca6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80.jpg", 
  "bread-ingredients.html", 
  "bread-equipment.html", 
  "bread-directions.html"
);



window.onload = function() {
  document.querySelector("#firstRecipe").onclick = function(){
    FluffyFrenchToast.displayRecipe();
  }
  
  document.querySelector("#secondRecipe").onclick = function(){
    IcedMatchaLatte.displayRecipe();
  }
  
  document.querySelector("#thirdRecipe").onclick = function(){
    RosemaryBread.displayRecipe();
  }
} // end window.onload