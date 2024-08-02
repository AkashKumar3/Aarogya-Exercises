import React from 'react'
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/gym-girl.jpg';

const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#00ced1" fontWeight="600" fontSize="26px">Aarogya Club</Typography>
    <Typography color="#333333" fontFamily="cursive" fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Work, Smile <br />
      And Stay Healthy
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#00ced1', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '24px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#065535" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Aarogya
    </Typography>
    <img src={HeroBannerImage} style={{borderRadius:'0 0 0 200px'}} alt="hero-banner" className="hero-banner-img" />
  </Box>
  )
}

export default HeroBanner