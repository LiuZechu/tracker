import './App.css';
import React, { useState, useEffect } from 'react';
import { Box, CardMedia, Typography, Button } from '@material-ui/core';
import axios from 'axios';


function App() {
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const apiLink = "https://api.wheretheiss.at/v1/satellites/25544";

  const fetchData = () => {
    axios.get(apiLink)
      .then(res => {
        setLongitude(res.data.longitude);
        setLatitude(res.data.latitude);
      });
  }

  const handleOnClick = () => {
    fetchData();
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="App">
      <Box marginTop={10}/>
      <Typography variant="h3">
        International Space Station Tracking Centre
      </Typography>
      <Box marginTop={10}/>
      <CardMedia style={{height: "20vw"}} image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/International_Space_Station_after_undocking_of_STS-132.jpg/1200px-International_Space_Station_after_undocking_of_STS-132.jpg" />
      <Box marginTop={10}/>
      <Typography variant="h4">
        The ISS is currently at Longitude {longitude} and Latitude {latitude}.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleOnClick} style={{marginTop: "3vw"}}>
        Refresh
      </Button>
    </div>
  );
}

export default App;
