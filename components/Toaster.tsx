import React from 'react'
import { useState } from 'react';

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
        <div>

        {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleCloseToast}>
            <Alert onClose={handleCloseToast} severity={severity as any} sx={{ width: '100%' }}>
                <p>{message}</p>
            </Alert>
        </Snackbar> */}
        </div>
    )
}
