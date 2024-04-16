import React from 'react'

interface CardProps {
    children: React.ReactNode;
}

const Card = ({children} : CardProps) => {
  return (
    <div className='w-[500px] h-[900px] rounded-[32px] bg-gray-700'>
      {children}
    </div>
  )
}

export default Card
