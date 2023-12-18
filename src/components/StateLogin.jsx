import Input from "./Input.jsx";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation.js";
import useInput from "../hooks/useInput.js";

export default function StateLogin() {
  // const [enteredValue, setEnteredValue] = useState({
  //   email: "",
  //   password: "",
  // });

  // const [isBlur, setIsBlur] = useState({
  //   email: false,
  //   password: false,
  // });

  const {
    value: emailValue,
    changeHandler: emailChangeHandler,
    blurHandler: blurEmailHandler,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty);

  const {
    value: passwordValue,
    changeHandler: passwordChangeHandler,
    blurHandler: blurPasswordHandler,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 6));

  // const emailIsInvalid =
  //   isBlur.email &&
  //   !isEmail(enteredValue.email) &&
  //   !isNotEmpty(enteredValue.email);

  // const passwordIsInvalid =
  //   isBlur.password && enteredValue.password.trim().length < 6;

  const submitHandler = (e) => {
    e.preventDefault();
    if (emailHasError || passwordHasError) {
      return;
    }

    console.log("entered Values: " + JSON.stringify(emailValue));
    console.log(emailValue, passwordValue);

    // setEnteredValue({
    //   email: "",
    //   password: "",
    // });
    // setIsBlur({
    //   email: true,
    //   password: true,
    // });
  };

  // function changeHandler(identifier, value) {
  //   setEnteredValue((prevState) => ({
  //     ...prevState,
  //     [identifier]: value,
  //   }));

  //   setIsBlur((preState) => ({
  //     ...preState,
  //     [identifier]: false,
  //   }));
  // }

  // function blurHandler(identifier) {
  //   setIsBlur((preState) => ({
  //     ...preState,
  //     [identifier]: true,
  //   }));
  // }
  return (
    <form onSubmit={submitHandler}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="E Mail"
          id="email"
          type="email"
          name="email"
          // onChange={(e) => changeHandler("email", e.target.value)}
          onChange={emailChangeHandler}
          // onBlur={() => blurHandler("email")}
          onBlur={blurEmailHandler}
          // value={enteredValue.email}
          value={emailValue}
          error={emailHasError && <p>Please enter a valid email address!</p>}
        />
      </div>

      <div className="control no-margin">
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={passwordChangeHandler}
          onBlur={blurPasswordHandler}
          value={passwordValue}
          error={passwordHasError && <p>Please enter a valid password!</p>}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat" type="reset">
          Reset
        </button>
        <button className="button" type="submit">
          Login
        </button>
      </p>
    </form>
  );
}
