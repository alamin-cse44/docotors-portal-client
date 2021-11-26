import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Service from '../Service/Service';
import img1 from '../../../assets/images/fluoride.png';
import img2 from '../../../assets/images/cavity.png';
import img3 from '../../../assets/images/whitening.png';

const Services = () => {

    const services = [
        {
            name : 'Fluoride Treatment',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae velit minima, laboriosam sunt illum dolor reprehenderit inventore tempore aliquam debitis officia a voluptatibus omnis. Qui ducimus deserunt minus, consequatur saepe facilis doloribus, laboriosam aspernatur numquam eum voluptates! Cumque, quas veritatis?' ,
            img : img1 
        },
        {
            name : 'Cavity Filling',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae velit minima, laboriosam sunt illum dolor reprehenderit inventore tempore aliquam debitis officia a voluptatibus omnis. Qui ducimus deserunt minus, consequatur saepe facilis doloribus, laboriosam aspernatur numquam eum voluptates! Cumque, quas veritatis?' ,
            img : img2
        },
        {
            name : 'Teeth Whitening',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae velit minima, laboriosam sunt illum dolor reprehenderit inventore tempore aliquam debitis officia a voluptatibus omnis. Qui ducimus deserunt minus, consequatur saepe facilis doloribus, laboriosam aspernatur numquam eum voluptates! Cumque, quas veritatis?' , 
            img : img3  
        }
    ]

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
            <Typography sx={{ fontWeight: 500, color: 'primary.main', m: 2 }} variant="h6" component="div">
                    Our Services
             </Typography>
             <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                    Services We Provide
             </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    services.map(service => <Service 
                    key = {service.name}    
                    service = {service}
                    ></Service>)
                }
            </Grid>
            </Container>
        </Box>
    );
};

export default Services;