import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: '#f8f9fa' }}>
      <Typography variant="body2" color="text.secondary" align="center">
        © 2024 Japton - Proyecto Agromocan
      </Typography>
    </Box>
  );
};

export default Footer;
