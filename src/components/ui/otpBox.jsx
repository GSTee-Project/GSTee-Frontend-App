import React, { useEffect, useRef } from 'react';
import { Box, InputBase } from '@mui/material';

const OtpBox = ({ length = 4, onChange }) => {

    useEffect(() => {
        inputsRef.current[0]?.focus();
    }, [])

    const inputsRef = useRef([]);

    const handleChange = (e, idx) => {
        const value = e.target.value;
        if (!/^[0-9]?$/.test(value)) return; // only allow digits

        const newOtp = [...inputsRef.current.map(input => input.value)];
        newOtp[idx] = value;
        onChange?.(newOtp.join(''));

        if (value && idx < length - 1) {
            inputsRef.current[idx + 1]?.focus();
        }
    };

    const handleKeyDown = (e, idx) => {
        if (e.key === 'Backspace' && !e.target.value && idx > 0) {
            inputsRef.current[idx - 1]?.focus();
        }
    };

    return (
        <Box display="flex" justifyContent="center" gap={2} mt={5} mb={4}>
            {Array.from({ length }).map((_, idx) => (
                <InputBase
                    key={idx}
                    inputRef={(el) => (inputsRef.current[idx] = el)}
                    inputProps={{
                        maxLength: 1,
                        style: {
                            width: '3rem',
                            height: '3rem',
                            textAlign: 'center',
                            fontSize: '1.5rem',
                            border: '1.5px solid #440B7F',
                            borderRadius: '8px',
                            fontFamily: 'Dm Sans',
                            fontWeight: '500'
                        },
                    }}
                    onChange={(e) => handleChange(e, idx)}
                    onKeyDown={(e) => handleKeyDown(e, idx)}
                />
            ))}
        </Box>
    );
};

export default OtpBox;
