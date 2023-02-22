import React, { useEffect,useState } from 'react'
import axios from 'axios'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
const Wheather = () => {
     const [weather,setWeather]= useState()
     const [Input,setInput] = useState()
     const [search,setSearch] = useState('rabat')
    // useEffect(()=>{
    //     axios.get(`http://api.weatherapi.com/v1/current.json?key=c46267197e584240ad9121236232102&q=${search}`)
    //     .then((data)=>{
    //         console.log(data.data)
    //         setWeather(data.data)
    //     })
    //     .catch((err)=>{
    //         console.log('error the data')
    //     })
    // },[search])
    // useEffect(()=>{
    //     axios.get('https://api.openweathermap.org/data/2.5/weather?q=london&appid=5c9b8a4dbfa0436bc8d5a95a37373a52')
    //     .then((data)=>{
    //         console.log(data)
    //         // setWeather(data.data)
    //     })
    //     .catch((err)=>{
    //         console.log('error the data')
    //     })
    // },[])
    const getapi = async ()=>{
       const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=5c9b8a4dbfa0436bc8d5a95a37373a52`)
       const response = await data.json()
       console.log(response)
       setWeather(response)
    }
    useEffect(()=>{
        getapi()
    },[search])
    
    const SearchWeather = ()=>{
        // e.prevent.default()
        setSearch(Input)
        setInput('')
    }
  return (
    <div className="h-screen relative bg-weaher bg-cover bg-center flex justify-center items-center font-Montserrat flex-col ">
            <div   className='mx-2 mb-6 absolute top-4 items-center flex md:space-x-3 space-x-1'>
            <input value={Input} onChange={(e)=>setInput(e.target.value)} className='h-10 w-48  px-4 rounded-md outline-none' type="text" placeholder='Search' />
            <button onClick={SearchWeather} className='bg-red-500 font-bold py-2 px-2 text-white text-sm h-10 rounded-md'>Search</button>
           </div>
        {
            weather && <div className='flex flex-col justify-center items-center'>
            <div className='flex items-center mb-6 gap-4 font-bold'>
                 <h2 className='text-white text-lg md:text-4xl'>{weather.sys.country},</h2>
                 <h3 className='text-white text-lg md:text-4xl'>{weather.name}</h3>
             </div>
             <div className='mt-4 flex flex-col justify-center items-center'>
                 <h1 className='text-8xl text-white font-bold'>{Math.floor(weather.main.temp - 273.15)}°</h1>
                 <img className='w-48' src='' alt="" />
                 <h4 className='text-white text-xl font-bold '></h4>
             </div>
            </div>
        }
       
    
     </div>
  )
}

export default Wheather