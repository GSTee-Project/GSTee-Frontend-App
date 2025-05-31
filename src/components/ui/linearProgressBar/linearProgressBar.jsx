import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

const CustomLinearProgress = styled(LinearProgress)(() => ({
  height: 11,
  borderRadius: 20,
  backgroundColor: '#E0E0E0',
  '& .MuiLinearProgress-bar': {
    borderRadius: 10,
    backgroundColor: 'var(--primary-color)',
  },
}));

const LinearProgressBar = ({ value }) => {
  return (
    <div style={{ width: '100%' }}>
      <CustomLinearProgress variant="determinate" value={value} />
    </div>
  );
};

export default LinearProgressBar;
