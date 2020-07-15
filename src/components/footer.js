import React from 'react';

const Footer = () => {
    return (
      <footer className="pt4 mt2 pb3 mid-gray">
        <small className="f6 db tc" style={{ letterSpacing: "0.01em" }}>© <b>IMS Lab</b> 2020 </small>
        <small className="f6 db tc mt2 pt1" style={{ letterSpacing: "0.01em" }}>Powered by
          <a className="b link dim mid-gray" href="https://reactjs.org/" key="react"> React </a>
          and
          <a className="b link dim mid-gray" href="https://tachyons.io/" key="tachyons"> Tachyons </a>
        </small>
      </footer>
    );
  }

export default Footer;