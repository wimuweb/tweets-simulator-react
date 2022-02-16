import React, { useState ,forwardRef} from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import './CustomizedSnackbar.scss';

// const Alert = React.forwardRef(function Alert(props,ref){(
//     <MuiAlert elevation={6} ref={ref} variant="filled" {...props}/>
// )});
const Alert  = forwardRef(function Alert(props,ref){
    // elevation={6}
    return <MuiAlert elevation={12} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbar(props) {
    const {toastProps:{open,text,severity},setToastProps} = props;

    const handleClose = () => {
        setToastProps({ ...props, open: false });
      };
   

 
  return (
    <Snackbar
        anchorOrigin={{
            vertical:'top',
            horizontal:'right'
        }}
        open={open}
        autoHideDuration={1000}
        message={<span id='message-id'>{text}</span>}
        onClose={handleClose}
       
    >
        
      
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}> 
        {text}
      </Alert>
    </Snackbar>
  )
}
