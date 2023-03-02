export function validatePassword(
  password,
  passwordStrength,
  setPasswordStrength
) {
  const easyReg = /^([а-яА-ЯёЁa-zA-Z])+$|^([0-9])+$|^([!@#$%^&*()_+=-])+$/;
  const mediumReg =
    /^([а-яА-ЯёЁa-zA-Z0-9])+$|^([0-9!@#$%^&*()_+=-])+$|^([а-яА-ЯёЁa-zA-Z!@#$%^&*()_+=-])+$/;
  const hardReg = /^[а-яА-ЯёЁa-zA-Z0-9!@#$%^&*()_+=-]+$/;
  if (password.length <= 8) {
    setPasswordStrength({
      ...passwordStrength,
      small: true,
      easy: false,
      medium: false,
      hard: false,
    });
  }
  if (password.length === 0) {
    setPasswordStrength({
      ...passwordStrength,
      small: false,
      easy: false,
      medium: false,
      hard: false,
    });
  }
  if (password.length > 8 && easyReg.test(String(password))) {
    setPasswordStrength({
      ...passwordStrength,
      small: false,
      easy: true,
      medium: false,
      hard: false,
    });
  } else if (password.length > 8 && mediumReg.test(String(password))) {
    setPasswordStrength({
      ...passwordStrength,
      small: false,
      easy: false,
      medium: true,
      hard: false,
    });
  } else if (password.length > 8 && hardReg.test(String(password))) {
    setPasswordStrength({
      ...passwordStrength,
      small: false,
      easy: false,
      medium: false,
      hard: true,
    });
  }
}
