import { Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

export default function UnavailableScreen() {
    return (
        <div>
            <Typography variant="h4" style={{marginTop: "5vh"}}>
                Sorry! Our service is only available in <Link to="/home/SG">Singapore</Link> and 
                the <Link to="/home/US">United States</Link>.
            </Typography>
        </div>
    )
}
