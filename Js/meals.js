const loadMeals = (searchText) =>{
   
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}



const displayMeals = meals =>{
// steap1......container element creat
    const mealsContainer = document.getElementById("meals-container")
    mealsContainer.innerText = ''
   meals.forEach(meal => {
        console.log(meal);
        const mealDiv = document.createElement('div')
        mealDiv.classList.add('col')
        mealDiv.innerHTML = `
        <div onClick='loadMealDetails(${meal.idMeal})' class="card" >
        <img src="${meal.strMealThumb}" class="card-img-top  " alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
        </div>
      </div>
        `;
        mealsContainer.appendChild(mealDiv)
   });
}
const searchMeal = () =>{
    const searchField = document.getElementById('search-field')

    const searchText =searchField.value 
    loadMeals(searchText)
    searchField.value = ''
   



}
const loadMealDetails = (idMeal) =>{
    console.log(idMeal);
    const url = ` https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
    .then(res =>res.json())
    .then(data => console.log(data.meals[0]))
}
const displayMealsDetails = meal =>{}

loadMeals(' ')