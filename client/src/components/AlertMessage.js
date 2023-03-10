/**
 * The alert message component
 * Created at 2021/11/14
 * Created by Alex.M
 */

import React from 'react';
import { Alert, Snackbar } from '@mui/material';
import useAlertMessage from '../hooks/useAlertMessage';

export default function AlertMessage() {
  const { isOpened, severity, message, closeAlert } = useAlertMessage();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    closeAlert();
  };
  return (
    <Snackbar
      open={isOpened}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
