import { useState } from "react";

export default function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);

  const [isBlur, setIsBlur] = useState(false);

  const valueIsValid = validationFn(enteredValue);

  function changeHandler(event) {
    setEnteredValue(event.target.value);

    setIsBlur(false);
  }

  function blurHandler() {
    setIsBlur(true);
  }

  return {
    value: enteredValue,
    changeHandler,
    blurHandler,
    hasError: isBlur && !valueIsValid,
  };
}
