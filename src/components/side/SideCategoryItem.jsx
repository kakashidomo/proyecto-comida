import React from 'react'

export default function SideCategoryItem({item}) {
    
    return (
        <>
            <li className='flex gap-8 justify-between'>
                {item.strCategory}
                <div>
                    <img className='w-[40px] h-[40px]  ' src={item.strCategoryThumb} alt="imagen" />
                </div>

            </li>
        </>

    )
}




/* 
idCategory
: 
"2"
strCategory: "Chicken"
strCategoryDescription: 
"Chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011.[1] Humans commonly keep chickens as a source of food (consuming both their meat and eggs) and, more rarely, as pets."
strCategoryThumb
: 
"https://www.themealdb.com/images/category/chicken.png" */