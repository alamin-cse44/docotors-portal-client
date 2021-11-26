import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import p1 from '../../../assets/images/people-1.png';
import p2 from '../../../assets/images/people-2.png';
import p3 from '../../../assets/images/people-3.png';

const Testimonial = () => {
    return (
        <Container sx={{mt:5, mb:3}}>
            <Grid sx={{textAlign:'left'}}>
            <Typography variant='h6' sx={{ fontWeight: 500, color:'#30F0CD' }}>
                Testimonial
            </Typography>
            <Typography variant='h4' sx={{mt:5, mb:3}}>
                What's Our Patients <br /> Says
            </Typography>
            </Grid>

           
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={4} sm={4} md={4}>
                <Card sx={{ maxWidth: 345, p:3, boxShadow: 2 }}>
                    
                    <CardContent>
                        
                        <Typography variant="body2" color="text.secondary">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsa quos ipsam soluta quo dicta cum quibusdam suscipit numquam illum architecto ipsum dignissimos, molestias, optio eaque quod veniam, ullam ratione?
                        </Typography>
                    </CardContent>
                    <CardMedia sx={{display:'flex', justifyContent:'center', mt:3}}>
                      <img style={{width:'60px'}} src={p1} alt="" />
                      
                          <Typography variant='h6' sx={{ fontWeight: 500, color:'#30F0CD', ml:2 }}>
                            Winson Herry <br />
                            <span style={{fontSize:'14px'}}>CaliFornia</span> 
                          </Typography>
                    </CardMedia>
                </Card> 
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                <Card sx={{ maxWidth: 345, p:3, boxShadow: 2 }}>
                    
                    <CardContent>
                        
                        <Typography variant="body2" color="text.secondary">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsa quos ipsam soluta quo dicta cum quibusdam suscipit numquam illum architecto ipsum dignissimos, molestias, optio eaque quod veniam, ullam ratione?
                        </Typography>
                    </CardContent>
                    <CardMedia sx={{display:'flex', justifyContent:'center', mt:3}}>
                      <img style={{width:'60px'}} src={p2} alt="" />
                      
                          <Typography variant='h6' sx={{ fontWeight: 500, color:'#30F0CD', ml:2 }}>
                            Winson Herry <br />
                            <span style={{fontSize:'14px'}}>CaliFornia</span> 
                          </Typography>
                    </CardMedia>
                </Card> 
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                <Card sx={{ maxWidth: 345, p:3, boxShadow: 2 }}>
                    
                    <CardContent>
                        
                        <Typography variant="body2" color="text.secondary">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsa quos ipsam soluta quo dicta cum quibusdam suscipit numquam illum architecto ipsum dignissimos, molestias, optio eaque quod veniam, ullam ratione?
                        </Typography>
                    </CardContent>
                    <CardMedia sx={{display:'flex', justifyContent:'center', mt:3}}>
                      <img style={{width:'60px'}} src={p3} alt="" />
                      
                          <Typography variant='h6' sx={{ fontWeight: 500, color:'#30F0CD', ml:2 }}>
                            Winson Herry <br />
                            <span style={{fontSize:'14px'}}>CaliFornia</span> 
                          </Typography>
                    </CardMedia>
                </Card>  
                </Grid>
            </Grid>
           
        </Container>
    );
};

export default Testimonial;