import React, { useState, useEffect } from 'react';
import styles from "./testimonialcard.module.css";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('testimonials.json');
        const data = await response.json();
        setTestimonials(data.testimonials);
      } catch (error) {
        setError(error);
      }
    };
    fetchTestimonials();
  }, []);

  if (error) {
    return <div>Error loading testimonials: {error.message}</div>;
  }

  if (!testimonials.length) {
    return <div>Loading...</div>;
  }

  const handleNextTestimonial = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<span key={i}>&#9733;</span>);
      } else {
        stars.push(<span key={i}>&#9734;</span>);
      }
    }
    return stars;
  };


  return (
    <div className={styles["testimonials-carousel"]}>
        <div className="arrows">
            <ArrowBack style={{ height: "100%", margin: "0 20px", color: "black", cursor: "pointer" }} onClick={handlePrevTestimonial}/>
        </div>
      <div className="testimonial">
        <p style={{ whiteSpace: 'pre-wrap', fontSize: '1.5rem' }}>
          <strong>{testimonials[currentIndex].name}</strong> <i style={{ whiteSpace: 'pre-wrap', fontSize: '0.8rem' }}>({testimonials[currentIndex].date})</i>
        </p>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <p style={{ whiteSpace: 'pre-wrap', fontSize: '1rem' }}>
          {renderStars(testimonials[currentIndex].rating)}
        </p>
        <p style={{ whiteSpace: 'pre-wrap', fontSize: '0.5rem' }}>{testimonials[currentIndex].verified && ' (Verified)'}</p>
        </div>
        <p style={{ whiteSpace: 'pre-wrap', fontSize: '1rem' }}>
          {testimonials[currentIndex].text}
        </p>
      </div>
      <div className={"arrows"} style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
        <ArrowForward style={{ height: "100%", margin: "0 20px", color: "black", cursor: "pointer" }} onClick={handleNextTestimonial}/>
      </div>
    </div>
  );
};

export default Testimonials;