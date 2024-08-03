import React from 'react'
import HighlightText from '../HomePage/HighlightText'

const Quote = () => {
  return (
    <div className=" text-xl md:text-4xl font-semibold mx-auto py-5 pb-20 text-center text-white">
        A leading online chemist with over 2K medicines available at the best prices. We are your o
        ne-stop destination for other . <HighlightText text={"healthcare products as well"} />,{" "}
        <span className="bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold">
            {" "}
            you can buy medicines online 
        </span>
        , and get them delivered  
        <span className="bg-gradient-to-b from-[#E65C00] to-[#F9D423] text-transparent bg-clip-text font-bold">
            {" "}
            at your doorstep.
        </span> 
    </div>
  )
}

export default Quote