import React, { useCallback, useState } from 'react';
import { validatePassword } from '../../utils/passwordValidate';
import './Password.css';

const Password = React.memo(() => {
  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState({ easy: false, medium: false, hard: false, small: false });
  const { easy, medium, hard, small } = passwordStrength;

  const handlePasswordChange = useCallback((event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    validatePassword(newPassword, passwordStrength, setPasswordStrength);
  }, [passwordStrength]);

  return (
    <div className='main__password password'>
      <h1 className='password__title'>Перевірка паролю</h1>
      <div className='password__body'>
        <div className='password__input'>
          <input
            value={password}
            onChange={handlePasswordChange}
            placeholder='Введіть пароль'
          />
        </div>
        <div className={`password__hints ${small ? 'small' : hard ? 'good' : ''}`}>
          <div className={`password__section password__section-easy ${easy ? 'err' : medium ? 'password__section-easy_orange' : ''}`}></div>
          <div className={`password__section password__section-medium ${medium ? 'err' : ''}`}></div>
          <div className='password__section password__section-hard'></div>
        </div> 
      </div>
    </div>
  );
});

export default Password;