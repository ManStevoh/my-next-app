import React from 'react'

const page = ({ params }: {params: {id: String}}) => {
 const {id} = params;
    return (
    <h1 className='text-3xml'>user profile : {id}</h1>
  )
}

export default page