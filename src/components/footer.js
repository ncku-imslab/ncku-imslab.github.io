import React from 'react';

const URL = "https://github.com/ncku-imslab/ncku-imslab.github.io/blob/master/package.json"

const Footer = () => {
  return (
    <footer className={footerClass}>
      <div>© <b>IMS Lab</b> 2020</div>
      <div className={moreInfoClass}>
        Powered by
          <b> React</b>
          ,
          <b> Tachyons </b>
          and {" "}
        <a className={urlClass} href={URL} target="_blank" rel="noopener" key="more">More</a>
      </div>
    </footer>
  )
}

export default Footer

const footerClass = "mid-gray f6"
const moreInfoClass = "pt3"
const urlClass = "b link dim mid-gray"