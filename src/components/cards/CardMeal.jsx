


function CardMeal({image}) {
  
  

 const {idMeal, strMeal, strMealThumb} = image 

  return (
    <div id ={idMeal}  className=" w-72 h-80 bg-white border-2  border-[#cf3721] rounded-lg shadow ">
      <div>
        <a href="#">
          <img
            className="rounded-t-lg w-full"
            src={strMealThumb}
            alt=""
          />
        </a>
      </div>
      <div className=" flex justify-center flex-col  items-center">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {strMeal}
          </h5>
        </a>
      </div>
    </div>
  )
}

export { CardMeal }


/* idMeal: "52819"
strMeal: "Cajun spiced fish tacos"
strMealThumb: "https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg" */