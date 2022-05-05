import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

const Staff = ({staff}) => {
  return (
    <div className='m-4'>
        <Card sx={{ maxWidth: 345 }}>
            <img
                className='w-full h-48'
                src={staff.image}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                <span className='font-bold'>Name</span> : <i className='text-teal-500 text-lg'>{staff.Name}</i>
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"><Link to={`/details/${staff.id}`} className='mx-2'>View Details</Link></Button>
            </CardActions>
        </Card>
    </div>
  )
}

export default Staff