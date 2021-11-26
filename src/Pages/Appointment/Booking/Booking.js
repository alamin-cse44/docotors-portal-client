import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date, setBookingSuccess }) => {
    const {name,time,space} = booking;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false); 
    return (
        <>
        <Grid item xs={12} sm={6} md={4}>
             <Paper elevation={3} sx={{p:4}}>
               <Typography variant="h5" style={{color:'#30F0CD'}}>
                   {name}
               </Typography>
               <Typography variant="h6" sx={{m:2}}>
                   {time}
               </Typography>
               <Typography variant="h6" sx={{ color: 'text.secondary', fontSize: '14px', mb:2 }}>
                   {space} SPACES AVAILABLE
               </Typography>
               <Button onClick={handleBookingOpen} style={{background:'#30F0CD'}} variant='contained'>Book Appoinment</Button>
             </Paper>     
         </Grid>

         <BookingModal 
         booking={booking}
         openBooking={openBooking}
         handleBookingClose={handleBookingClose}
         date={date}
         setBookingSuccess={setBookingSuccess}
         ></BookingModal>
         
         </>
    );
};

export default Booking;