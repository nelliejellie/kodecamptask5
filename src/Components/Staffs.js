import React from 'react'
import Staff from './Staff'

const Staffs = ({staffs}) => {
  return (
    <div className='flex flex-wrap justify-center'>
        {
            staffs.map(staff => <Staff key={staff.id} staff={staff} />)
        }
    </div>
  )
}

export default Staffs