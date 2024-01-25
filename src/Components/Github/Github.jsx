import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    //Without using loader
    // const [data , setData] =useState([])
    // useEffect( ()=>{
    //     fetch('https://api.github.com/users/Xohail69')
    //     .then(response => response.json())
    //     .then(data => {
    //         setData(data)
    //     })
    // } ,[])

    const data = useLoaderData()

  return (
    <div className='text-center m-4 bg-gray-600 text-white
    p-4 text-3xl  '>Github followers: {data.followers}
    <img src={data.avatar_url}
    alt="Git pfp" width={300} 
        className='rounded-full mx-auto'
    />
    </div>
  )
}
export default Github



//Using loader
export const githubInfoLoader = async ()=> {
    const response = await fetch('https://api.github.com/users/Xohail69')
    return response.json()

}