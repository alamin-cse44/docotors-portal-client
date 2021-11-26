import { Alert, Container, Grid } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name : 'Teeth Orthodontics',
        time: '8:30 AM - 9.00 AM',
        space : 10
    },
    {
        id: 2,
        name : 'Cosmetic Dentisty',
        time: '10.05 am - 11.30 am',
        space : 10
    },
    {
        id: 3,
        name : 'Teeth Cleaning',
        time: '5.00 pm - 6.30 pm',
        space : 10
    },
    {
        id: 4,
        name : 'Cavity Protection',
        time: '7.00 am - 8.30 am',
        space : 10
    },
    {
        id: 5,
        name : 'Teeth Orthodonics',
        time: '7.00 am - 8.30 am',
        space : 10
    },
    {
        id: 6,
        name : 'Teeth Orthodonics',
        time: '7.00 am - 8.30 am',
        space : 10
    }
]

const AvailableAppoinments = ({ date }) => {
    // const {user} = useAuth();
    const [bookingSuccess, setBookingSuccess] = useState();
    return (
        <Container>
            <h2 style={{color:'#30F0CD'}}>Available Appoinments on {date.toDateString()}</h2>
            {bookingSuccess && <Alert severity="success">Appointment booked Successfully</Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking 
                    key={booking.id} 
                    booking={booking}
                    date={date}
                    setBookingSuccess={setBookingSuccess}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppoinments;