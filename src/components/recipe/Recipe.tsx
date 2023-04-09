/**
 Created: vlad
 Date: 04.04.2023
 Time: 20:12
 */

/**
 * Компонент для отображения рецептов
 * @param recipe рецепты
 */
const Recipe = (recipe) => {
    return(
        <>
            <h2>Ingredients</h2>
            <ul>
                recipe.map(function(i){
                <li>i</li>
            });
            </ul>
        </>
    )
}

export default Recipe;