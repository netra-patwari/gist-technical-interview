import React from 'react'

interface CardTextProps { 
    text: string;
    
}

const CardText = ({text } : CardTextProps ) => {
  return (
    <div className="px-4 py-2 text-xl">
    <div>
      {text}
    </div>
    <div className="w-2/4 mt-4">
  <p className="" >Summarized News Story by</p>
  <p className="text-lime-300">The Gist - AI News App</p>
    </div>
  </div>
  
  )
}

export default CardText
