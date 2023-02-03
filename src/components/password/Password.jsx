import React, { useEffect, useState } from 'react';
import { passwordCheck } from '../../utils/passwordCheck';
import './Password.css';

const Password = () => {
  const [password, setPassword] = useState('');
  const [passwordEasy, setPasswordEasy] = useState(false);
  const [passwordMedium, setPasswordMedium] = useState(false);
  const [passwordHard, setPasswordHard] = useState(false);
  const [passwordSmall, setPasswordSmall] = useState(false);

  useEffect(() => {
    passwordCheck(password, setPasswordSmall, setPasswordEasy, setPasswordMedium, setPasswordHard);
  }, [password]);
  return (
    <div className='main__password password'>
      <h1 className='password__title'>Перевірка паролю</h1>
      <div className='password__body'>
        <div className='password__input'>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Введіть пароль'
          />
        </div>
        <div
          className={
            passwordSmall
              ? 'password__hints small'
              : passwordHard
              ? 'password__hints good'
              : 'password__hints'
          }
        >
          <div
            className={
              passwordEasy
                ? 'password__section password__section-easy err'
                : passwordMedium
                ? 'password__section password__section-easy_orange'
                : 'password__section password__section-easy'
            }
          ></div>
          <div
            className={
              passwordMedium
                ? 'password__section password__section-medium err'
                : 'password__section password__section-medium'
            }
          ></div>
          <div className='password__section password__section-hard'></div>
        </div>
      </div>
    </div>
  );
};

export default Password;
