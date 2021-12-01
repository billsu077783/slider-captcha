import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Card from './card';
import { ReloadIcon } from './icons';

const Anchor = ({
 text, fetchCaptcha, submitResponse, verified,
}) => {
  const cardRef = useRef();
  const refresh = () => {
    cardRef.current.refreshCaptcha();
  };
  return (
    <div>
      <div>
        <Card
          cRef={cardRef}
          fetchCaptcha={fetchCaptcha}
          submitResponse={submitResponse}
          text={text}
        />
      </div>
      {!verified && (
        <div
          className="scaptcha-anchor-container scaptcha-anchor-element"
          onClick={refresh}
        >
          <div className="scaptcha-anchor-label scaptcha-anchor-element">
            {text.anchor}
          </div>
          <ReloadIcon />
        </div>
      )}
    </div>
  );
};
Anchor.propTypes = {
  fetchCaptcha: PropTypes.func.isRequired,
  submitResponse: PropTypes.func.isRequired,
  text: PropTypes.shape({
    anchor: PropTypes.string,
    challenge: PropTypes.string,
  }).isRequired,
  verified: PropTypes.bool.isRequired,
};

export default Anchor;
