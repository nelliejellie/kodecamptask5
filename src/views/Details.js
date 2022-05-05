import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Details = ({allStaffs}) => {
  const {id} = useParams()
  const staff = allStaffs.find(staff => staff.id == id)
  return (
    <div className='text-black h-screen'>
      <Navbar/>
      <div className='flex mt-16 w-4/5 justify-center mx-auto h-4/5'>
        <Card className='w-4/5'>
            <img
                className='w-full h-80'
                src={staff.image}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                <span className='font-bold'>Name</span> : <i className='text-teal-500 text-lg'>{staff.Name}</i>
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                <span className='font-bold'>Email</span> : <i className='text-teal-500 text-lg'>{staff.Email}</i>
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                <span className='font-bold'>Jobtitle</span> : <i className='text-teal-500 text-lg'>{staff.jobtitle}</i>
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                <span className='font-bold'>Username</span> : <i className='text-teal-500 text-lg'>{staff.username}</i>
                </Typography>
            </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Details