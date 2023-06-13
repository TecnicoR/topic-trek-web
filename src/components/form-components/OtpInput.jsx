import React, { useRef } from 'react';
import { TextField, Box, Typography } from '@mui/material';

export const OtpInput = ({ numDigits, label, onChange }) => {
  const inputRefs = useRef([]);

  const handleInputChange = (index, value) => {
    const otp = inputRefs.current.map((ref) => ref.value).join('');
    onChange(otp);

    if (value && index < numDigits - 1) {
      inputRefs.current[index + 1].focus();
    } else if (!value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !inputRefs.current[index].value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const renderInputBoxes = () => {
    const inputBoxes = [];
    for (let i = 0; i < numDigits; i++) {
      inputBoxes.push(
        <TextField
          key={i}
          inputRef={(ref) => (inputRefs.current[i] = ref)}
          variant="outlined"
          type="text"
          inputProps={{ maxLength: 1 }}
          onChange={(e) => handleInputChange(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          style={{ width: '3rem', marginRight: '1rem' }}
        />
      );
    }
    return inputBoxes;
  };

  return (
    <Box>
      <Typography variant="subtitle1">{label}</Typography>
      <Box display="flex" alignItems="center">
        {renderInputBoxes()}
      </Box>
    </Box>
  );
};
