import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { BASE_URL } from '../../App';
import "./MultiActionAreaCard.css"

export const MultiActionAreaCard = () => {
  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9000')
      .then(response => response.json())
      .then(data => setFoodData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='container'>
      {foodData.map((food, index) => (
        <Card key={index} sx={{ maxWidth: 400, marginBottom: 8 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="100"
              image={BASE_URL + food.image}
              alt={food.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" >
                {food.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" >
                {food.text}
              </Typography>
            </CardContent>
            {/* Link to the Details component with video link as a parameter */}
            <Link to={`/details/${encodeURIComponent(food.link)}?about=${encodeURIComponent(food.about)}&scheme=${encodeURIComponent(food.scheme)}&rate=${encodeURIComponent(food.rate)}`} style={{ textDecoration: 'none' }}>
              <Button size="small" color="primary">
                Start
              </Button>
            </Link>
          </CardActionArea>
          <CardActions className="description">
          </CardActions>
        </Card>
      ))}
    </div>
  );
}


