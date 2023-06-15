import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-slate-800 text-white mt-10">
      <div >
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
        <a className="link link-hover">
          <Link to="/">Home</Link>
        </a>
        <a className="link link-hover">
          <Link to="/category">Category</Link>
        </a>
        <a className="link link-hover">
          <Link to="/about-us">About</Link>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
