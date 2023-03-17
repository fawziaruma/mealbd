const loadMeal = searchText =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .than(res => res.json())
    .than(data =>console.log(data))
}
loadMeal()