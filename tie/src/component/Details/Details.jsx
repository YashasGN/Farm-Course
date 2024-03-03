import React from 'react';
import { useParams,useLocation} from 'react-router-dom';
import "./Details.css"
export const Details = () => {
  const { link } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const about = queryParams.get('about');
  const scheme = queryParams.get('scheme');
  const rate = queryParams.get('rate');


  return (
    <div>
      <div className="video-container">
        <iframe
          title="YouTube Video Player"
          src={`https://www.youtube.com/embed/${link}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="about-section">
  <h4>About</h4>
  <p>{about}</p>
</div>
<div className="scheme-section">
  <h4>Government Scheme</h4>
  <p>{scheme}</p>
</div>
<div className="price-section">
  <h4>Current Price</h4>
  <p>{rate}</p>
</div>

      
    </div>
   
  );
};
