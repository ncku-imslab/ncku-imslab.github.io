import React from 'react';

const Footer = () => {
    return (
      <footer className="pt4 mt2 pb3 mid-gray">
        <small className="f6 db tc" style={{ letterSpacing: "0.01em" }}>© <b>IMS Lab</b> 2020 </small>
        <small className="f6 db tc pt3" style={{ letterSpacing: "0.01em" }}>Powered by
          <span className="b link dim mid-gray" key="react" href="https://reactjs.org/"> React</span>
          ,
          <span className="b link dim mid-gray" key="tachyons" href="https://tachyons.io/"> Tachyons </span>
          and 
          <span className="b link dim mid-gray" key="more" href="https://github.com/tienshaoku/imslab_website/blob/master/package.json/"> More </span>
        </small>
      </footer>
    );
  }

export default Footer;