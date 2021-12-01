import React, {
 useState, useEffect, useRef, useImperativeHandle,
} from 'react';
import PropTypes from 'prop-types';
import { LoadingIcon } from './icons';
import Challenge from './challenge';

const Card = ({
 cRef, text, fetchCaptcha, submitResponse,
}) => {
  const [key, setKey] = useState(Math.random());
  const [captcha, setCaptcha] = useState(false);
  const isMounted = useRef(false);

  useImperativeHandle(cRef, () => ({
    refreshCaptcha: () => {
      fetchCaptcha().then((newCaptcha) => {
        setTimeout(() => {
          if (!isMounted.current) return;
          setKey(Math.random());
          setCaptcha(newCaptcha);

          if (typeof window !== 'undefined') {
            window.localStorage.setItem('captcha', newCaptcha.solution);
          }
        }, 300);
      });
    },
  }));

  const completeCaptcha = (response, trail) =>
    new Promise((resolve) => {
      submitResponse(response, trail).then((verified) => {
        if (typeof window !== 'undefined') {
          window.localStorage.removeItem('captcha');
        }
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
  fetchCaptcha: PropTypes.func.isRequired,
  submitResponse: PropTypes.func.isRequired,
  text: PropTypes.shape({
    anchor: PropTypes.string,
    challenge: PropTypes.string,
  }).isRequired,
};

export default Card;
