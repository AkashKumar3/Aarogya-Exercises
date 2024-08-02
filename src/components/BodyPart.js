import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/dumbbell.svg';
import { styled } from '@mui/material/styles';


const StyledBodyPartCard = styled(Stack)(({ theme, selected }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '16px',
  width: '270px',
  height: '282px',
  background: '#fff',
  boxShadow: `0 4px 12px rgba(0, 206, 209, 0.3)`, 
  cursor: 'pointer',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
  gap: '20px',
  position: 'relative',
  overflow: 'hidden',
  border: selected ? `4px solid #00ced1` : '4px solid transparent',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: `0 8px 24px rgba(0, 206, 209, 0.5)`,
  },
}));

// Styled component for the icon
const IconWrapper = styled('div')(({ theme }) => ({
  width: '70px',
  height: '70px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  background: '#f8f8f8',
  boxShadow: `0 4px 8px rgba(0, 206, 209, 0.2)`, 
  transition: 'box-shadow 0.3s ease',
  '&:hover': {
    boxShadow: `0 6px 12px rgba(0, 206, 209, 0.3)`, 
  },
}));

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <StyledBodyPartCard
    type="button"
    selected={bodyPart === item}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 4800, left: 100, behavior: 'smooth' });
    }}
  >
    <IconWrapper>
      <img src={Icon} alt="dumbbell" style={{ width: '50px', height: '50px' }} />
    </IconWrapper>
    <Typography
      fontSize="24px"
      fontWeight="bold"
      fontFamily="Alegreya"
      color="#3A1212"
      textTransform="capitalize"
      textAlign="center" // Center text
    >
      {item}
    </Typography>
  </StyledBodyPartCard>
);

export default BodyPart;
