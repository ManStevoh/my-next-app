import React from 'react'

const layouts = ({children}: {children: React.ReactNode} ) => {
  return (
    <div>
        <p className='text-3tx'>dashbord navbar</p>
        {children}
    </div>
  )
}

export default layouts