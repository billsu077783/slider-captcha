import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ArrowIcon, SuccessIcon, FailureIcon } from './icons';

const imageDataUrl = (image) =>
  `data:image/png;base64,${Buffer.from(image).toString('base64')}`;

const slider = {
  default: {
    track: 'scaptcha-card-slider-track-default',
    control: 'scaptcha-card-slider-control-default',
    icon: <ArrowIcon />,
  },
  active: {
    track: 'scaptcha-card-slider-track-active',
    control: 'scaptcha-card-slider-control-active',
    icon: <ArrowIcon />,
  },
  success: {
    track: 'scaptcha-card-slider-track-success',
    control: 'scaptcha-card-slider-control-success',
    icon: <SuccessIcon />,
  },
  failure: {
    track: 'scaptcha-card-slider-track-failure',
    control: 'scaptcha-card-slider-control-failure',
    icon: <FailureIcon />,
  },
};

const SLIDER_WIDTH = 60;

const Challenge = ({
  text,
  captcha,
  completeCaptcha,
  challenge,
  container,
}) => {
  const [sliderVariant, setSliderVariant] = useState(slider.default);
  const [solving, setSolving] = useState(false);
  const [submittedResponse, setSubmittedResponse] = useState(false);
  const [origin, setOrigin] = useState({
    x: 0,
    y: 0,
  });
  const [trail, setTrail] = useState({
    x: [0],
    y: [0],
  });

  // Converts distances along the control track to corresponding distances moved by the puzzle piece
  const scaleSliderPosition = (x) =>
    container.padding +
    ((container.width - container.padding * 2 - SLIDER_WIDTH) /
      (challenge.width - SLIDER_WIDTH)) *
      x;

  const handleStart = (e) => {
    if (submittedResponse) return;
    setOrigin({
      x: e.clientX || e.touches[0].clientX,
      y: e.clientY || e.touches[0].clientY,
    });
    setSolving(true);
    setSliderVariant(slider.active);
  };

  const handleMove = (e) => {
    if (!solving || submittedResponse) return;
    const move = {
      x: (e.clientX || e.touches[0].clientX) - origin.x,
      y: (e.clientY || e.touches[0].clientY) - origin.y,
    };
    // Don't update if outside bounds of captcha
    if (move.x > challenge.width - SLIDER_WIDTH || move.x < 0) return;
    setTrail({
      x: trail.x.concat([move.x]),
      y: trail.y.concat([move.y]),
    });
  };

  const handleEnd = () => {
    if (!solving || submittedResponse) return;
    setSubmittedResponse(true);
    completeCaptcha(
      scaleSliderPosition(trail.x[trail.x.length - 1]),
      trail,
    ).then((validated) => {
      setSliderVariant(validated ? slider.success : slider.failure);
    });
  };

  const handleEnter = () => {
    if (solving || submittedResponse) return;
    setSliderVariant(slider.active);
  };

  const handleLeave = () => {
    if (solving) return;
    setSliderVariant(slider.default);
  };

  return (
    <div
      className="scaptcha-card-element"
      draggable="false"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
    >
      <div
        className="scaptcha-card-background scaptcha-card-element"
        style={{
          width: `${container.width}px`,
          height: `${container.height}px`,
          backgroundImage: `url('${imageDataUrl(captcha.background)}')`,
        }}
      />
      <div
        className="scaptcha-card-slider-puzzle scaptcha-card-element"
        style={{
          backgroundImage: `url('${imageDataUrl(captcha.slider)}')`,
          left: `${scaleSliderPosition(trail.x[trail.x.length - 1])}px`,
          width: `${SLIDER_WIDTH}px`,
          height: `${container.height}px`,
        }}
        onMouseDown={handleStart}
        onTouchStart={handleStart}
      />
      <div
        className="scaptcha-card-slider-container scaptcha-card-element"
        style={{
          width: `${challenge.width}px`,
          height: `${challenge.height}px`,
        }}
      >
        <div
          className="scaptcha-card-slider-track scaptcha-card-element"
          style={{
            width: `${challenge.width}px`,
            height: `${challenge.height}px`,
          }}
        />
        <div
          className="scaptcha-card-slider-label scaptcha-card-element"
          style={{
            opacity: solving ? 0 : 1,
            width: `${challenge.width}px`,
            height: `${challenge.height}px`,
          }}
        >
          <span>{text.challenge}</span>
        </div>
        <div
          className={`scaptcha-card-slider-mask ${sliderVariant.track} scaptcha-card-element`}
          style={{
            width: `${trail.x[trail.x.length - 1] + 30}px`,
            height: `${challenge.height}px`,
          }}
        />
        <div
          className="scaptcha-card-slider-container scaptcha-card-element"
          draggable="false"
          style={{
            width: `${challenge.width}px`,
            height: `${challenge.height}px`,
          }}
        />
        <div
          className={`scaptcha-card-slider-control ${sliderVariant.control} scaptcha-card-element`}
          style={{
            left: `${trail.x[trail.x.length - 1]}px`,
            width: `${SLIDER_WIDTH}px`,
            height: `${challenge.height}px`,
          }}
          onMouseDown={handleStart}
          onTouchStart={handleStart}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          {sliderVariant.icon}
        </div>
      </div>
    </div>
  );
};

Challenge.propTypes = {
  completeCaptcha: PropTypes.func.isRequired,
  captcha: PropTypes.shape({
    slider: PropTypes.shape({
      type: PropTypes.string,
      data: PropTypes.arrayOf(PropTypes.number),
    }),
    background: PropTypes.shape({
      type: PropTypes.string,
      data: PropTypes.arrayOf(PropTypes.number),
    }),
  }).isRequired,
  text: PropTypes.shape({
    anchor: PropTypes.string,
    challenge: PropTypes.string,
  }).isRequired,
  challenge: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }).isRequired,
  container: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    padding: PropTypes.number,
  }).isRequired,
};

export default Challenge;
