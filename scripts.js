/* AJAX code*/

function loadFileInto(fromFile, whereTo) {

	ajax = new XMLHttpRequest();

	ajax.open("GET", fromFile, true);

	ajax.onreadystatechange = function() {

		if ((this.readyState == 4) && (this.status == 200)) {
			document.getElementById(whereTo).innerHTML = this.responseText;

		} else if ((this.readyState == 4) && (this.status != 200)) {
			console.log("Error: " + this.responseText);

		}

	}

	ajax.send();

}

/* recipe consturctor*/

function Recipe(recipeName, imageURL, contributorName, IngredientsFileName, EquipmentFileName, DirectionsFileName) {
	this.name = recipeName;
	this.imgsrc = imageURL;
	this.contributor = contributorName;
	this.ingFile = IngredientsFileName;
	this.equipFile = EquipmentFileName;
	this.dirFile = DirectionsFileName;

	/* screen updater*/
	this.displayRecipe = function() {
		document.querySelector("h1#recipeName").innerHTML = this.name;

		/* Contributor update */
		document.querySelector("h2#contributorName").innerHTML = "Contributed by" + this.contributor;

		/* image update*/
		document.querySelector("h3 img").src = this.imgsrc;

		/* Content Column update */
		loadFileInto(this.ingFile, "ingredients");
		loadFileInto(this.equipFile, "equipment");
		loadFileInto(this.dirFile, "directions");

	}
}

FrenchOnionBreadedBakedChicken = new Recipe
("French Onion-Breaded Baked Chicken",
	"https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
	"Owen Kapuza",
	"Ingredients.html",
	"Equipment.html",
	"Directions.html"

 
);

lasagna = new Recipe
("Lasagna",
	"https://cdn.pixabay.com/photo/2017/02/15/15/17/meal-2069021_1280.jpg",
	"Madison Roby",
	"Ingredients2.html",
	"Equipment2.html",
	"Directions2.html"
 );

SliderStyleMiniBurgers = new Recipe
("Slider-Style Mini Burgers",
	"https://cdn.pixabay.com/photo/2020/05/06/12/18/food-5137304_1280.jpg",
	"Jake Stephens",
	"Ingredients3.html",
	"Equipment3.html",
	"Directions3.html"
 );

