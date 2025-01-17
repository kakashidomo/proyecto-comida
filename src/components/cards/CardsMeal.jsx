import {CardMeal} from "./CardMeal"

function CardsMeal() {
  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <CardMeal />
          <CardMeal />
          <CardMeal />
          <CardMeal />
          <CardMeal />
          <CardMeal />
          <CardMeal />
          
      </div>
    </>
  );
}

export { CardsMeal };
