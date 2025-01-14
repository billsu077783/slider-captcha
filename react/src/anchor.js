import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Card from './card';
import { ReloadIcon } from './icons';

const Anchor = ({
  text,
  createCaptcha,
  submitResponse,
  verified,
  refreshing,
  anchor,
  card,
  challenge,
}) => {
  const cardRef = useRef();
  const refresh = () => {
    if (refreshing) return;
    cardRef.current.refreshCaptcha();
  };
  return (
    <div>
      <div>
        <Card
          cRef={cardRef}
          createCaptcha={createCaptcha}
          submitResponse={submitResponse}
          text={text}
          card={card}
          challenge={challenge}
        />
      </div>
      {!verified && (
        <div
          className="scaptcha-anchor-container scaptcha-anchor-element"
          style={{
            width: `${anchor.width}px`,
            height: `${anchor.height}px`,
            marginTop: `-${anchor.height}px`,
          }}
          onClick={refresh}
        >
          <div
            className="scaptcha-anchor-label scaptcha-anchor-element"
            style={{
              width: `${anchor.width}px`,
              height: `${anchor.height}px`,
            }}
          >
            {text.anchor}
          </div>
          <ReloadIcon loading={refreshing} />
        </div>
      )}
    </div>
  );
};
Anchor.propTypes = {
  createCaptcha: PropTypes.func.isRequired,
  submitResponse: PropTypes.func.isRequired,
  text: PropTypes.shape({
    anchor: PropTypes.string,
    challenge: PropTypes.string,
  }).isRequired,
  verified: PropTypes.bool.isRequired,
  refreshing: PropTypes.bool.isRequired,
  anchor: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }).isRequired,
  card: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    padding: PropTypes.number,
  }).isRequired,
  challenge: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }).isRequired,
};

export default Anchor;
