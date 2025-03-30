import React from "react";
import PropTypes from "prop-types";

const FadeInRight = (props) => {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!isVisible) setVisible(entry.isIntersecting);
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -40% 0px",
        threshold: 0,
      },
    );
    observer.observe(domRef.current);
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div
      className={`fade-right-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
};

FadeInRight.propTypes = {
  children: PropTypes.node,
};

export default FadeInRight;
