import React from 'react'
import "./Page2.css"

export const Page2 = () => {
  return (
    <>
    <body>
        <div className='Container'>
             <h1 className='heading1'>CATAGORIES</h1>
        <div className='plant-category-grid'>
            <div className='plant-category'>
                <img src="/Imagess/Jungleplant.jpg" alt="Jungle Plant" />
                <p>Jungle Plants</p> </div>

            <div className='plant-category'>
                <img src="/Imagess/outdoorplant.webp" alt="Outdoor Plant" />
                <p>Outdoor Plant</p> </div>

            <div className='plant-category'>
                <img src="/Imagess/brdroomplant.jpg" alt="Bedroom Plant" />
                <p>Bedroom Plant</p> </div>

            <div className='plant-category'>
                <img src="/Imagess/indoorplant.jpg" alt="Indoor Plant" />
                <p>Indoor Plant</p> </div>

        </div>
            <p className='quote'>
                Love and work are to peaople and water and nation are the peaple
            </p>
        </div>
    </body>
    </>
  )
}
export default Page2;
