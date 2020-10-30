import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { DispatchContext } from '../context/rating.context';

const width = 110;

const styles = {
  starsInner: {
    width: `${width}px`,
  },
  starsEmptyInner: {
    position: 'absolute',
    width: `${width}px`,
  },
  starsOuter: {
    overflow: 'hidden',
  },
  star: {
    padding: '1px',
    cursor: 'pointer',
  },
};

const cropWidth = rating => {
  return Math.floor((rating * width) / 5);
};

const StarRating = ({ rating, id }) => {
  const [ratingHovered, setRatingHovered] = useState(false);
  const [hoveredStar, setHoveredStar] = useState(0);
  const containerStyle = { width: ratingHovered ? `${cropWidth(hoveredStar)}px` : `${cropWidth(rating)}px` };
  const dispatch = useContext(DispatchContext);

  return (
    <div>
      <div style={styles.starsOuter}>
        <div
          style={containerStyle}
          onMouseEnter={() => setRatingHovered(true)}
          onMouseLeave={() => setRatingHovered(false)}
        >
          {ratingHovered ? (
            <React.Fragment>
              <div style={styles.starsEmptyInner}>
                {[1, 2, 3, 4, 5].map(val => (
                  <i
                    key={val}
                    className="fa fa-star-o fa-lg"
                    style={styles.star}
                    onMouseEnter={() => setHoveredStar(val)}
                    onClick={() => dispatch({ type: 'ADD', payload: { id, value: val } })}
                  ></i>
                ))}
              </div>
              <div style={styles.starsInner}>
                {[1, 2, 3, 4, 5].map(val => (
                  <i key={val} className="fa fa-star fa-lg" style={styles.star}></i>
                ))}
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div style={styles.starsEmptyInner}>
                {[1, 2, 3, 4, 5].map(val => (
                  <i key={val} className="fa fa-star-o fa-lg" style={styles.star}></i>
                ))}
              </div>
              <div style={styles.starsInner}>
                {[1, 2, 3, 4, 5].map(val => (
                  <i key={val} className="fa fa-star fa-lg" style={styles.star}></i>
                ))}
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

StarRating.defaultProps = {
  rating: 0,
};

StarRating.propTypes = {
  rating: PropTypes.number,
};

export default StarRating;
