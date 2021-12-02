import React, {
 useState, useEffect, useRef, useImperativeHandle,
} from 'react';
import PropTypes from 'prop-types';
import { LoadingIcon } from './icons';
import Challenge from './challenge';

const Card = ({
 cRef, text, createCaptcha, submitResponse,
}) => {
  const [key, setKey] = useState(Math.random());
  const [captcha, setCaptcha] = useState(false);
  const isMounted = useRef(false);

  useImperativeHandle(cRef, () => ({
    refreshCaptcha: () => {
      createCaptcha().then((newCaptcha) => {
        setTimeout(() => {
          if (!isMounted.current) return;
          setKey(Math.random());
          setCaptcha(newCaptcha);
        }, 300);
      });
    },
  }));

  const completeCaptcha = (response, trail) =>
    new Promise((resolve) => {
      submitResponse(response, trail).then((verified) => {
        if (verified) {
          resolve(true);
        } else {
          cRef.current.refreshCaptcha();
          resolve(false);
        }
      });
    });

  useEffect(() => {
    isMounted.current = true;
    cRef.current.refreshCaptcha();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <div className="scaptcha-card-container scaptcha-card-element">
      {captcha ? (
        <Challenge
          key={key}
          text={text}
          captcha={captcha}
          completeCaptcha={completeCaptcha}
        />
      ) : (
        <div className="scaptcha-card-loading scaptcha-card-element">
          <LoadingIcon />
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  cRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.elementType }),
  ]).isRequired,
  createCaptcha: PropTypes.func.isRequired,
  submitResponse: PropTypes.func.isRequired,
  text: PropTypes.shape({
    anchor: PropTypes.string,
    challenge: PropTypes.string,
  }).isRequired,
};

export default Card;
