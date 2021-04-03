import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { setUserData } from "../../Store/Actions/user";
import Input from "../../Components/Input/input";

const SignIn = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isInValidSubmit, setIsInvalidSubmit] = useState(false);

  const submitHandler = event => {
    event.preventDefault();
    if (firstName && lastName) {
      setUserDataHandler({ firstName, lastName });
    } else {
      setIsInvalidSubmit(true);
    }
  };

  const setUserDataHandler = useCallback(data => {
    data && dispatch(setUserData(data));
  });

  return <section className="section background">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="sign-up-wrapper">
            <div className="form-title">
              <h1>Sign In</h1>
              <p>Enter your data to sign in to the program.</p>
            </div>
            <form onSubmit={submitHandler}>
              <Input
                id="firstname"
                type="text"
                labelValue="First Name *"
                fail={isInValidSubmit && !firstName}
                changed={event => setFirstName(event.target.value)}
              />
              <Input
                id="lastname"
                type="text"
                labelValue="Last Name *"
                fail={isInValidSubmit && !lastName}
                changed={event => setLastName(event.target.value)}
              />
              <button type="submit" className="action-btn mt-3">Sign In</button>
            </form>
          </div>
        </div>
      </div>
    </div>;
  </section>
}

export default SignIn;