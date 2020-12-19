import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Box, CardMedia, Typography, Button } from '@material-ui/core';
import axios from 'axios';

export default function Home(props) {
    const availableCountries = ["SG", "US"];
    const countryMap = {
        "SG": "Singapore",
        "US": "the United States"
    }
    const countryCode = props.match.params.country;
    const country = countryMap[countryCode];
    const [longitude, setLongitude] = useState(0);
    const [latitude, setLatitude] = useState(0);
    const apiLink = "https://api.wheretheiss.at/v1/satellites/25544";
    const history = useHistory();
  
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
      if (!(availableCountries.includes(countryCode))) {
          history.push('/error');
          return;
      }

      fetchData();
    }, [])


    return (
        <div>
            <Box marginTop={10}/>
            <Typography variant="h3">
                International Space Station Tracking Center
            </Typography>
            <Box marginTop={10}/>
            <CardMedia style={{height: "20vw"}} image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/International_Space_Station_after_undocking_of_STS-132.jpg/1200px-International_Space_Station_after_undocking_of_STS-132.jpg" />
            <Box marginTop={10}/>
            { country !== undefined && (
                <Typography variant="h4">
                    You are viewing from {country}.
                </Typography>
            )}
            <Box marginTop={5}/>
            <Typography variant="h4">
                The ISS is currently at Longitude {longitude} and Latitude {latitude}.
            </Typography>
            <Button variant="contained" color="primary" onClick={handleOnClick} style={{marginTop: "3vw"}}>
                Refresh
            </Button>
        </div>
    )
}
