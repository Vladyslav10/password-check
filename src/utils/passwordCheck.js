export function passwordCheck(
  password,
  setPasswordSmall,
  setPasswordEasy,
  setPasswordMedium,
  setPasswordHard
) {
  const easyReg = /^([а-яА-ЯёЁa-zA-Z])+$|^([0-9])+$|^([!@#$%^&*()_+=-])+$/;
  const mediumReg =
    /^([а-яА-ЯёЁa-zA-Z0-9])+$|^([0-9!@#$%^&*()_+=-])+$|^([а-яА-ЯёЁa-zA-Z!@#$%^&*()_+=-])+$/;
  const hardReg = /^[а-яА-ЯёЁa-zA-Z0-9!@#$%^&*()_+=-]+$/;
  if (password.length <= 8) {
    setPasswordSmall(true);
    setPasswordEasy(false);
    setPasswordHard(false);
    setPasswordMedium(false);
  }
  if (password.length === 0) {
    setPasswordSmall(false);
  }
  if (password.length > 8 && easyReg.test(String(password))) {
    setPasswordEasy(true);
    setPasswordSmall(false);
    setPasswordMedium(false);
    setPasswordHard(false);
  } else if (password.length > 8 && mediumReg.test(String(password))) {
    setPasswordEasy(false);
    setPasswordMedium(true);
    setPasswordHard(false);
    setPasswordSmall(false);
  } else if (password.length > 8 && hardReg.test(String(password))) {
    setPasswordMedium(false);
    setPasswordSmall(false);
    setPasswordHard(true);
  }
}
