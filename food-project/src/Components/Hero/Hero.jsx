import React from 'react'
import Food1 from "../../assets/biryani3.png";
import Food2 from "../../assets/biryani5.png";
import Food3 from "../../assets/biryani2.png";
import bgImg from "../../assets/vector3.png";


const ImageList = [
    {
        id:1,
        img: Food1,
    },
    {
        id:2,
        img: Food2,
    },
    {
        id:3,
        img: Food3,
    },
]

const bgImage  ={
    backgroundImage: `url(${bgImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
}

const Hero = () => {
    const [imageId , setImageId] = React.useState(Food1);
  return (
    <>
    <div style={bgImage} className="min-h-[550px] sm:min-h-[600px] bg-gray-100 dark:bg-gray-950 dark:text-white duration-200 flex justify-center items-center">

        <div className="container pb-8 sm:pb-0">
            <div className="grid grid-cols-1 sm:grid-cols-2">
           {/* text content center */}
           <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">Welcome To The Foodie Zone</h1>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni magnam rem ad consectetur labore animi repudiandae sint deleniti exercitationem culpa!</p>
           </div>





            </div>
        </div>
    </div>
    </>
  )
}

export default Hero