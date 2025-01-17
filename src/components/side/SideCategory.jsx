import React, { useEffect, useState } from 'react'
import SideCategoryItem from './SideCategoryItem'

const url = "https://www.themealdb.com/api/json/v1/1/categories.php"

async function fetchData(url) {
    const response = await fetch(url)
    const data = await response.json()
    return data
}
export default function SideCategory() {
    const [categories, setCategories] = useState([])
  
    useEffect(()=> {
        fetchData(url)
        .then(data => setCategories(data.categories))
    },[])

    return (
        <>
        <div className='px-8'>
            <ul>
                {

                    categories.map(item => (
                        <SideCategoryItem item={item}/>
                    ))
                }
                
            </ul>
           
        </div>

        </>
    )
}
