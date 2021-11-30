import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from './card';
import { ReloadIcon } from './icons';

const Anchor = ({
 text, fetchCaptcha, submitResponse, verified,
}) => {
  const [refreshKey, setKey] = useState(true);
  const refreshCaptcha = () => {
    setKey(true);
  };
  const refreshEnd = () => {
    setKey(false);
  };
  return (
    <div>
      <div>
        <Card
          refresh={refreshKey}
          refreshEnd={refreshEnd}
          fetchCaptcha={fetchCaptcha}
          submitResponse={submitResponse}
          text={text}
        />
      </div>
      {!verified && (
        <div
          className="scaptcha-anchor-container scaptcha-anchor-element"
          onClick={refreshCaptcha}
        >
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
