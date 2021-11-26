import React from 'react';
import Grid from '@mui/material/Grid';
import treatment from '../../../assets/images/treatment.png';
import { Button, Container, Typography } from '@mui/material';

const ExceptionalDental = () => {
    return (
        <Container sx={{mt:5}}>
            <Grid container spacing={2} sx={{alignItems:'center', textAlign:'left'}}>
            <Grid item xs={12} sm={12} md={5}>
              <img style={{width:'350px'}} src={treatment} alt="" />
            </Grid>
            <Grid item xs={12} sm={12} md={7}>
              <Typography variant="h4" sx={{ fontWeight: 500, color:'#30F0CD' }}>
                  Exceptional Dental <br /> Care,  on Your Terms
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize:'14px', my:3 }}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit repudiandae expedita necessitatibus neque laborum. Odit molestias sequi est, aperiam, earum, nisi quas assumenda quasi itaque nostrum tempora praesentium consequatur? Quisquam expedita repudiandae molestias doloribus sunt modi distinctio, aspernatur voluptas dignissimos explicabo debitis dicta architecto similique tempora. Odio recusandae distinctio unde!
              </Typography>
              <Button style={{background:'#30F0CD'}} variant='contained'>Learn More</Button>
            </Grid>
        
      </Grid>
        </Container>
    );
};

export default ExceptionalDental;