import React,{useEffect, useState} from 'react'
import Sipnner from '../Component/Sipnner';
import "../css/category.css"




const renderCategorydata = (Category) => {
  return (
    <div className='category-section'>
      {
        Category && Category.map((product) => {
          return (
            <div key={product.id} className="category-card">
              <img src={product.image} className="category-img" />

              <div >
                <h6>{product.title}</h6>
                <h6>{`price : ${"$" + product.price}`}</h6>
                {/* <h6>{`Description:${product.description}`}</h6> */}
                <h6>{`Category:${product.category}`}</h6>
              </div>
            </div>
          );
        })
      }
    </div>
  )
}
export const Category = () => {

  return (

    <div>Category</div>
  )
}

export const Electronic = () => {
  let localData = JSON.parse(localStorage.getItem('dataKey'))
  const [loading, setLoading] = useState(true);

  const [electronics,setElectronics] = useState()

  useEffect(()=>{
    setElectronics(localData)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  },[])
  

  const _filter = localData.filter((data) => {
    if (data.category === "electronics") {
      return data
    }
  }

  )
  console.log(_filter);
  return(
    <>
    {
      loading?(<Sipnner/>):(renderCategorydata(_filter))
    }
    </>
  ) 
}

export const Jewelery = () => {

  let localData = JSON.parse(localStorage.getItem('dataKey'))
  const [loading, setLoading] = useState(true);

  const [jewelery,setJewelery] = useState()

  useEffect(()=>{
    setJewelery(localData)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  },[])
  
  const _filter = localData.filter((data) => {
    if (data.category === "jewelery") {
      return data
    }
  }

  )
  console.log(_filter);
  return(
    <>
    {
      loading?(<Sipnner/>):(renderCategorydata(_filter))
    }
    </>
  ) 
}

export const MensClothing = () => {

  let localData = JSON.parse(localStorage.getItem('dataKey'))
  const [loading, setLoading] = useState(true);

  const [mensClothing,setMensclothing] = useState()

  useEffect(()=>{
    setMensclothing(localData)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  },[])
  const _filter = localData.filter((data) => {
    if (data.category ==="men's clothing") {
      return data
    }
  }

  )
  console.log(_filter);
  return(
    <>
    {
      loading?(<Sipnner/>):(renderCategorydata(_filter))
    }
    </>
  ) 
}

export const WomensClothing = () => {
  let localData = JSON.parse(localStorage.getItem('dataKey'))
  const [loading, setLoading] = useState(true);

  const [womensClothing,setWomensclothing] = useState()

  useEffect(()=>{
    setWomensclothing(localData)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  },[])
  const _filter = localData.filter((data) => {
    if (data.category ==="women's clothing") {
      return data
    }
  }

  )
  console.log(_filter);
  return(
    <>
    {
      loading?(<Sipnner/>):(renderCategorydata(_filter))
    }
    </>
  ) 
}
