import { useEffect, useState, useRef,  } from 'react';
import PropTypes from 'prop-types';

const FadeInUp = (props) => {
  const [isVisible, setVisible] = useState(false);
  const [isTime, setIsTime] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(!isVisible && isTime)
          setVisible(entry.isIntersecting)
      });
    }, {
      root: null,
      rootMargin: '0px 0px -5% 0px',
      threshold: 0
    });
    observer.observe(domRef.current);
    return () => observer.disconnect();
  }, [isVisible, isTime]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsTime(true);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      className={`fade-up-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
};

FadeInUp.propTypes = {
  children: PropTypes.node
};

export default FadeInUp;