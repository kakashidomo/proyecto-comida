import { useState, useEffect } from "react"





export default function useData(url) {
  const [data,setData] = useState ([])

    useEffect(()=> {
        fetchData(url)
        .then(data => setData(data.categories))
    },[url])
  
    return (
  data  
  )
}
