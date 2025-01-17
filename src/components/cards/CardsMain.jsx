
import { useEffect, useState } from "react";
import { CardMeal } from "./CardMeal";
import { InputSearchMeal } from "./InputSearchMeal";
const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"

function CardsMain() {
  async function fetchData2(url) {
    const response = await fetch(url)
    const data = await response.json()
    return data
  }
  const [images, setImages] = useState([])
  useEffect(() => {
    fetchData2(url)
      .then(data => setImages(data.meals))
  }, [])
  return (
    <>
      <div className="flex items-center flex-col h-screen  gap-y-16 ">
        <div className="mt-3">
        <InputSearchMeal />
        </div>
        <div className="flex flex-col gap-5">
          {
            images.map(image =>(
              <CardMeal image={image}/>
            ))
          }
        </div>
      </div>
    </>
  );
}

export {CardsMain}
