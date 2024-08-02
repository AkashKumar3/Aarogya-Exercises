import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';


const StyledCard = styled('div')(({ theme }) => ({
  display: 'block',
  textDecoration: 'none',
  color: 'inherit',
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0 4px 12px rgba(0, 206, 209, 0.5)', 
  transition: 'transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease',
  position: 'relative',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 24px rgba(0, 206, 209, 0.7)', 
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.1))',
  },
}));


const CardContent = styled('div')(({ theme }) => ({
  position: 'absolute',
  bottom: '0',
  left: '0',
  right: '0',
  background: 'rgba(0, 0, 0, 0.6)',
  color: '#fff',
  padding: theme.spacing(2),
  borderRadius: '16px',
  transition: 'opacity 0.3s ease',
  opacity: 0,
  '&:hover': {
    opacity: 1,
  },
}));


const ExerciseCard = ({ exercise }) => (
  <StyledCard>
    <Link to={`/exercise/${exercise.id}`} style={{ textDecoration: 'none' }}>
 
      <img 
        src={exercise.gifUrl} 
        alt={exercise.name} 
        loading="lazy" 
        style={{ 
          width: '100%', 
          height: 'auto', 
          display: 'block', 
          objectFit: 'cover', 
          transition: 'opacity 0.3s ease', 
          borderRadius: '16px', 
        }} 
      />
      <CardContent>
        <Stack direction="row" spacing={2}>
          <Button 
            sx={{ 
              color: '#fff', 
              background: '#00ced1', 
              fontSize: '14px', 
              borderRadius: '20px', 
              textTransform: 'capitalize',
              '&:hover': {
                background: '#00b2b2',
              },
            }}
          >
            {exercise.bodyPart}
          </Button>
          <Button 
            sx={{ 
              color: '#fff', 
              background: '#FF8C8C', 
              fontSize: '14px', 
              borderRadius: '20px', 
              textTransform: 'capitalize',
              '&:hover': {
                background: '#FF6F6F',
              },
            }}
          >
            {exercise.target}
          </Button>
        </Stack>
        <Typography 
          mt="16px" 
          fontWeight="bold" 
          sx={{ fontSize: { lg: '24px', xs: '20px' }, mb: 2 }} 
          textTransform="capitalize"
        >
          {exercise.name}
        </Typography>
      </CardContent>
    </Link>
  </StyledCard>
);

export default ExerciseCard;
