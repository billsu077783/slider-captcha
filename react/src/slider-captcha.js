import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createStore } from 'redux';
import Anchor from './anchor';
import Theme from './theme';

const fetchCaptcha = (create) => (width, height) => {
  const { getState, dispatch } = createStore();

  const { controller } = getState();
  controller.abort();

  const newController = new window.AbortController();
  const { signal } = newController;
  dispatch({ type: 'SET_NEW_CONTROLLER', payload: newController });

  return create instanceof Function
    ? create(width, height) // Use provided promise for getting background and slider
    : fetch(create, {
        // Use create as API URL for fetch
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          width,
          height,
        }),
        signal,
      }).then((message) => message.json());
};

const fetchVerification = (verify) => (captcha, response, trail) =>
  verify instanceof Function
    ? verify(captcha, response, trail) // Use provided promise for verifying captcha
    : fetch(verify, {
        // Verification API URL provided instead
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          captcha,
          response: {
            response,
            trail,
          },
          tolerance: 5,
        }),
      }).then((message) => message.json());

const SliderCaptcha = ({
  callback,
  create,
  verify,
  variant,
  anchor,
  card,
  challenge,
  text,
}) => {
  const [verified, setVerified] = useState(false);
  const [captcha, setCaptcha] = useState('');
  const createCaptcha = () =>
    new Promise((resolve) => {
      fetchCaptcha(create)(card.width, card.height).then((newCaptCha) => {
        setCaptcha(newCaptCha.solution);
        resolve(newCaptCha);
      });
    });
  const submitResponse = (response, trail) =>
    new Promise((resolve) => {
      fetchVerification(verify)(captcha, response, trail).then(
        (verification) => {
          setCaptcha('');
          if (
            !verification.result ||
            verification.result !== 'success' ||
            !verification.token
          ) {
            resolve(false);
          } else {
            setTimeout(() => {
              callback(verification.token);
              setVerified(true);
            }, 500);
            resolve(true);
          }
        },
      );
    });
  return (
    <div className="scaptcha-container">
      <Theme variant={variant} />
      <Anchor
        text={text}
        createCaptcha={createCaptcha}
        submitResponse={submitResponse}
        verified={verified}
        anchor={anchor}
        card={card}
        challenge={challenge}
      />
    </div>
  );
};

SliderCaptcha.propTypes = {
  callback: PropTypes.func,
  create: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  verify: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  variant: PropTypes.string,
  anchor: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  card: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    padding: PropTypes.number,
  }),
  challenge: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  text: PropTypes.shape({
    anchor: PropTypes.string,
    challenge: PropTypes.string,
  }),
};

SliderCaptcha.defaultProps = {
  callback: (token) => console.log(token), // eslint-disable-line no-console
  create: 'captcha/create',
  verify: 'captcha/verify',
  variant: 'light',
  anchor: {
    width: 520,
    height: 50,
  },
  card: {
    width: 520,
    height: 230,
    padding: 20,
  },
  challenge: {
    width: 520,
    height: 50,
  },
  text: {
    anchor: 'I am human',
    challenge: 'Slide to finish the puzzle',
  },
};

export default SliderCaptcha;
