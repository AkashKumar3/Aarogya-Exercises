import React from 'react';
import { Box, Stack, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => (
  <Box
    mt="80px"
    bgcolor="#45d1d3"
    pt="40px"
    pb="60px"
    sx={{
      color: '#e0e0e0',
      borderTop: '2px solid #00ced1',
      position: 'relative',
    }}
  >
    <Stack
      direction="row"
      spacing={2}
      justifyContent="center"
      flexWrap="wrap"
      sx={{ mb: '20px' }}
    >
      <Stack direction="row" spacing={2}>
        <IconButton
          href="https://facebook.com"
          target="_blank"
          sx={{ color: '#3b5998', '&:hover': { color: '#1a1a1a', backgroundColor: '#3b5998', borderRadius: '50%' } }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          href="https://twitter.com"
          target="_blank"
          sx={{ color: '#00acee', '&:hover': { color: '#1a1a1a', backgroundColor: '#00acee', borderRadius: '50%' } }}
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          href="https://instagram.com"
          target="_blank"
          sx={{ color: '#C13584', '&:hover': { color: '#1a1a1a', backgroundColor: '#C13584', borderRadius: '50%' } }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          href="https://linkedin.com"
          target="_blank"
          sx={{ color: '#0e76a8', '&:hover': { color: '#1a1a1a', backgroundColor: '#0e76a8', borderRadius: '50%' } }}
        >
          <LinkedInIcon />
        </IconButton>
      </Stack>
    </Stack>
    <Typography
      variant="h6"
      sx={{ fontSize: { lg: '22px', xs: '18px' }, textAlign: 'center', mb: '10px', fontWeight: 300 }}
    >
      Stay updated with our latest news and updates by connecting with us on social media.
    </Typography>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: '20px', xs: '16px' }, textAlign: 'center', fontWeight: 300 }}
    >
      &copy; 2024 Akash Kumar. All rights reserved.
    </Typography>
    <Box
      sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(to right, #00ced1, #00bfae, #00ced1)',
      }}
    />
  </Box>
);

export default Footer;
