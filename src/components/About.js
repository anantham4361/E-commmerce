import { Box, Card, CardMedia, Container, Paper, Typography } from '@mui/material';
import React from 'react';


function About() {



  return (
    <Container maxWidth="sm" className='doCenter'>
      <Typography variant="h2" gutterBottom>
        About Us
      </Typography>
      <Paper>
        <Typography variant="body1" gutterBottom sx={{
          padding:5
        }}>
        We're on a mission to make
building better e-commerce site with unrivalled speed and ease.
        </Typography>
      </Paper>

<Box>
<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg"
        title="green iguana"
      />
    </Card>
</Box>
      

    </Container>
  );
}

export default About;