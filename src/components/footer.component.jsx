import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-slate-800 text-white mt-10">
      <div>
        <div className="text-blue-300">
          <p>HADRWARE INSIGHT</p>
        </div>
      </div>
      <div>
        <span className="footer-title">Study In</span>
        <a className="link link-hover">Universitas Muhammadiyah Surakarta</a>
        <a className="link link-hover">Universitas Riau</a>
        <a className="link link-hover">Universitas Jakarta Raya</a>
      </div>
      <div>
        <span className="footer-title">Program</span>
        <a className="link link-hover">Magang Merdeka</a>
        <a className="link link-hover">Dicoding</a>
      </div>
      <div>
        <span className="footer-title">NavLink</span>
        <Link to="/">
          <p className="link link-hover">Home</p>
        </Link>
        <Link to="/category">
          <p className="link link-hover">Category</p>
        </Link>
        <Link to="/about-us">
          <p className="link link-hover">About Us</p>
        </Link>
        
      </div>
    </footer>
  );
};

export default Footer;
