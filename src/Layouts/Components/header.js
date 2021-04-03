import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { TODO_LIST_KEY } from "../../Constants/urlKeys";
import { removeUserData } from "../../Store/Actions/user";

const Header = () => {
  const dispatch = useDispatch();

  const signOutHandler = useCallback(() => {
    dispatch(removeUserData());
  }, [dispatch])
  

  return <header className="header">
    <nav>
      <div className="header-block">
        <div className="logo-wrapper">
          <Link to={`/${TODO_LIST_KEY}`}>Todo List</Link>
        </div>
        <div className="sign-out-btn-wrapper">
          <button type="button" className="btn-default" onClick={signOutHandler}>Sign out</button>
        </div>
      </div>
    </nav>
  </header>;
}

export default Header;
