import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Card from './card';
import { ReloadIcon } from './icons';

const Anchor = ({
  text,
  createCaptcha,
  submitResponse,
  refreshSolution,
  verified,
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
          createCaptcha={createCaptcha}
          submitResponse={submitResponse}
          refreshSolution={refreshSolution}
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
  createCaptcha: PropTypes.func.isRequired,
  submitResponse: PropTypes.func.isRequired,
  refreshSolution: PropTypes.func.isRequired,
  text: PropTypes.shape({
    anchor: PropTypes.string,
    challenge: PropTypes.string,
  }).isRequired,
  verified: PropTypes.bool.isRequired,
};

export default Anchor;
