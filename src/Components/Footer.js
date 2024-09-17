import React from 'react';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
  AiFillLinkedin,
  AiFillFacebook
} from "react-icons/ai";
import img from '../Assests/logo.png';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-section">
        <img
          src={img}
          alt="Founder"
        />
        <h2>COZY COVE</h2>
        <p>@All rights reserved</p>
      </div>

      <div className="footer-section footer-quotes">
        <h2>Quotes</h2>
        <p >"Every stray deserves a chance at love, not a life of cruelty. Be their voice, be their hope."</p>
        <p >"The way we treat stray animals speaks volumes about our humanity. Choose kindness, not cruelty."</p>
        <p>"Stray animals deserve shelter from cruelty and a chance at happiness. Be the change they need."</p>
      </div>

      <aside className="footer-section">
        <h2>Social Media</h2>
        <article>
          <a href="https://instagram.com/tushar_kumar_______" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/meabhisingh" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/meabhisingh" target={"blank"}>
            <AiFillFacebook />
          </a>
          <a href="https://github.com/meabhisingh" target={"blank"}>
            <AiFillYoutube />
          </a>
        </article>
        
        <p>Mobile No: +919999999999</p>
        <p>Email: sdfa@gmail.com</p>
        <p>Address: Delhi</p>
      </aside>

      <a href="#nav" className="back-to-top">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
}

export default Footer;
