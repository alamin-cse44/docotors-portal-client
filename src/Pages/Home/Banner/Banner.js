import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';
import { Button, Typography, Container} from '@mui/material';


const bannerBg = {
    background : `url(${bg})`,
    
}

const verticalCenter = {
    display : 'flex',
    alignItems : 'center',
    height: '450px',
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1, mt:3}}>
            <Grid container spacing={2} sx={{ }}>
                <Grid style={{...verticalCenter, textAlign:'left'}} item xs={12} md={6}>
                    <Box>
                        <Typography variant="h4">
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{my:3, color:'text.secondary', fontSize:16}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel consequatur eos cum. Ad tempore excepturi beatae et porro sed natus!
                        </Typography>
                        <Button variant="contained">Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                  <img style={{width:'350px'}} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;