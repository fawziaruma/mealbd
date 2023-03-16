const loadMeals = (searchText) =>{
   
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data))
}



const displayMeals = meals =>{
// steap1......container element creat
    const mealsContainer = document.getElementById("meals-container")
    mealsContainer.innerText = ''
   meals.forEach(meal => {
        console.log(meal);
   });
}
const searchMeal = () =>{
    const searchText = document.getElementById('search-field').value 
    loadMeals(searchText)

}
