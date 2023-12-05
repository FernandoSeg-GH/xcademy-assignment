import React from 'react'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useState } from 'react';
import { Button } from '@mui/material';

type ToasterProps = {
    open: boolean;
    message: string;
    severity: 'success' | 'info' | 'warning' | 'error' | undefined;
  }
  

export default function Toaster({ open, message, severity }: ToasterProps) {
  
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState({ open: false, message: '', severity: 'info' });

    const handleCloseToast = () => {
        setToast({ ...toast, open: false });
    };

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleCloseToast}>
            <Alert onClose={handleCloseToast} severity={severity as any} sx={{ width: '100%' }}>
                <p>{message}</p>
            </Alert>
        </Snackbar>
    )
}
