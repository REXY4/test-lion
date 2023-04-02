import React from "react";
import Alert from 'react-bootstrap/Alert';

interface Props {
    vars : string
    message : string
}

const AlertBasic:React.FC<Props> = ({vars, message}) => {
  return (
    <>
      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].filter((c:any)=>c.includes(vars)).map((variant) => (
        <div style={{
            position : "absolute",
            zIndex : 100,
            width : "300px"
        }}>
        <Alert key={variant} variant={variant}>
            {message}
        </Alert>
        </div>
      ))}
    </>
  );
}

export default AlertBasic;