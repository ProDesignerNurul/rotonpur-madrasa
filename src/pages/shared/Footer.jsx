import React from "react";
import logoImg from "../../assets/images/logo/3.jpg";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <aside>
          <img className="w-28" src={logoImg} alt="" />
        </aside>
        {/* <nav>
          <h6 className="footer-title">Services</h6>
          <Link className="link link-hover">Branding</Link>
          <Link className="link link-hover">Design</Link>
        </nav> */}
        <nav>
          <h6 className="footer-title">মাদ্রাসা সম্পর্কে</h6>
          <Link className="link link-hover">মাদ্রাসা সম্পর্কে কিছু তথ্য</Link>
          <Link className="link link-hover">আমাদের সাথে যোগাযোগ</Link>
        </nav>
        <nav>
          <h6 className="footer-title">আমাদের সাথে যুক্ত হতে</h6>
          <a
            href={`https://www.facebook.com/rowjatululummohilamadrasa.rotonpur.gohorpur`}
            target="_blank"
            className="link link-hover"
          >
            ফেইসবুক
          </a>
          <Link className="link link-hover">হোয়াটসঅ্যাপ</Link>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
