import { Box, LinearProgress } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const Skill = ({ skill }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const progressRef = useRef(null);

  useEffect(() => {
    const currentProgressRef = progressRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(entry.isIntersecting);
          observer.unobserve(currentProgressRef);
        }
      }, { rootMargin: '0px' },
    );

    if (currentProgressRef) { observer.observe(currentProgressRef); }

    return () => observer.unobserve(currentProgressRef);
  }, [progressRef.current]);

  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        setProgress((oldProgress) => Math.min(oldProgress + 20, skill.competence));
      }, 250);

      return () => clearInterval(timer);
    }
    setProgress(0);
    return undefined;
  }, [isVisible]);

  return (
    <Box>
      <p className="progress-list">
        <span>{skill.name}</span>
        {' '}
        <span>
          {progress}
          {' '}
          %
        </span>
      </p>
      <Box sx={{ width: '100%' }} ref={progressRef}>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            backgroundColor: '#C4C4C4',
            height: '6px',
            marginBottom: '30px',
            '& .MuiLinearProgress-bar1Determinate': {
              background: '#6d56c1',
            },
          }}
        />
      </Box>
    </Box>
  );
};

Skill.propTypes = {
  skill: PropTypes.shape().isRequired,
};

export default Skill;
