import { Fragment, useContext, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

import { UserContext } from "../context/user.context";

import { signOutUser } from "../utils/firebase/firebase.utils";

import Footer from "../components/footer.component";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  useEffect(() => {
    // This will run every time currentUser changes
  }, [currentUser]);
  return (
    <Fragment>
      <div className="fixed top-0 z-40 flex justify-between pl-20 pr-20 shadow-md navbar bg-base-100">
        <div className="flex-1">
          <Link to="/" className="text-xl font-bold">
            Hardware Insight
          </Link>
        </div>
        <div className="flex-none">
          <ul className="gap-6 text-lg menu menu-horizontal">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/category">Category</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
          </ul>
          {currentUser ? (
            <button onClick={signOutHandler}>Sign Out</button>
          ) : (
            <Link to="/auth">Sign in</Link>
          )}
        </div>
      </div>
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Navigation;
