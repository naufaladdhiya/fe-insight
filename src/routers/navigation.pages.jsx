import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Footer from '../components/footer.component';

const Navigation = () => {
  return (
    <Fragment>
      <div className="navbar shadow-md bg-base-100 flex justify-between fixed top-0 z-40 pl-20 pr-20">
        <div className="flex-1">
          <a className="text-xl font-bold">Hardware</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal text-lg gap-6">
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
        </div>
      </div>
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Navigation;
