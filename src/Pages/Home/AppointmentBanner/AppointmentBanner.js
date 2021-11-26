import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../assets/images/doctor.png';
import bg from '../../../assets/images/appointment-bg.png';
import { Button, Container, Typography } from '@mui/material';

const appointmentBg = {
    background : `url(${bg})`,
    marginTop : 175,
    backgroundColor: 'rgba(133, 134, 202, 0.7)',
    backgroundBlendMode: 'darken, luminosity'
}

const AppointmentBanner = () => {
    return (
        <Container>
          <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <img style={{width:'400px', marginTop:'-110px'}} src={doctor} alt="" />
            </Grid>
            <Grid item xs={12} md={6} sx={{ 
                display: 'flex', 
                justifyContent: 'flex-start' ,
                alignItems: 'center',
                textAlign: 'left'
                }}> 
              <Box>
                <Typography variant="h6" sx={{mb:5}} style={{color:'#036755'}}>
                    Appoinment
                </Typography>

                <Typography variant="h4" sx={{mb:2}} style={{color:'white'}}>
                    Make an Appoinment Today
                </Typography>

                <Typography variant="h6" style={{color:'white', fontSize:14, fontWeight:300}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita incidunt doloribus quis quo recusandae fugit deserunt ipsam harum nobis officiis!
                </Typography>
                <Button sx={{mt:3}} variant="contained">Learn More</Button>
              </Box>
            </Grid>

            
          </Grid>
    </Box>
        </Container>
    );
};

export default AppointmentBanner;