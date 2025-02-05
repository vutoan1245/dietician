import React from "react";
import "./Nutrition.css";

function Nutrition(props) {
  // async function getNutritionalDataFromFDC(itemID) {
  //   try {
  //     const response = await fetch(
  //       `https://api.nal.usda.gov/fdc/v1/${itemID}?api_key=${process.env.REACT_APP_FDC_API}`
  //     );
  //     const responseJson = await response.json();
  //     const nutrition = {
  //       description: responseJson.description,
  //       servingSize: responseJson.servingSize,
  //       servingSizeUnit: responseJson.servingSizeUnit,
  //     };
  //     if (responseJson.labelNutrients) {
  //       nutrition["labelNutrients"] = responseJson.labelNutrients;
  //     }
  //     return nutrition;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  console.log(props);

  const nutritionLabel = (calories, protein, fat, carbs, water, sugar, fiber) => (
    <div>
      <section class="performance-facts">
        <header class="performance-facts__header">
          <h1>{props.location.name}</h1>
          <h1 class="performance-facts__title">Nutrition Facts</h1>
          <p>Serving Size 100 g</p>
        </header>
        <table class="performance-facts__table">
          <thead>
            <tr>
              <th colspan="3" class="small-info">
                Amount Per Serving
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th colspan="2">
                <b>Calories </b>
              </th>
              <td>
                <b>{calories} kcal</b>
              </td>
            </tr>
            <tr>
              <th colspan="2">
                <b>Protein </b>
              </th>
              <td>
                <b> {protein} g</b>
              </td>
            </tr>
            <tr>
              <td class="blank-cell"></td>
              <th>Total lipid (fat) </th>
              <td>
                <b> {fat} g</b>
              </td>
            </tr>
            <tr>
              <td class="blank-cell"></td>
              <th>Carbohydrate, by difference </th>
              <td>
                <b> {carbs} g</b>
              </td>
            </tr>
            <tr>
              <th colspan="2">
                <b>Water</b>
              </th>
              <td>
                <b>{water} g</b>
              </td>
            </tr>
            <tr>
              <th colspan="2">
                <b>Sugars</b>
              </th>
              <td>
                <b>{sugar} g</b>
              </td>
            </tr>
            <tr>
              <td class="blank-cell"></td>
              <th>Dietary Fiber</th>
              <td>
                <b>{fiber} g</b>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );

  return (
    <div>
      {props.location.id === 339622
        ? nutritionLabel(205, 14.3, 0, 36.82, 46.61, 2.86, 5.7)
        : props.location.id === 336750
        ? nutritionLabel(81, 10.45, 2.27, 4.76, 81.24, 4, 0)
        : props.location.id === 562115
        ? nutritionLabel(167, 0, 15, 10, "?", 6.7, 6.7)
        : props.location.id === 339638
        ? nutritionLabel(250, 10.2, 1.53, 48.89, 37.55, 6.12, 4.1)
        : props.location.id === 173418
        ? nutritionLabel(350, 6.15, 34.44, 5.52, 52.62, 3.76, 0)
        : props.location.id === 538283
        ? nutritionLabel(127, 21.82, 1.82, 3.64, "?", 0, 1.8)
        : props.location.id === 342592
        ? nutritionLabel(23, 3.99, 0.69, 2.1, 92.82, 0.2, 1.9)
        : ""}
    </div>
  );
}

export default Nutrition;
