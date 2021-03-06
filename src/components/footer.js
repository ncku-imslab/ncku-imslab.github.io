import React from "react"

const URL = "https://github.com/ncku-imslab/ncku-imslab.github.io/blob/master/package.json"

// Don't do extraction as descriptions are tangled with HTML tags
const Footer = () => {
    const logoSec = (
        <div>
            © <b>IMS Lab</b> 2020
        </div>
    )
    const urlSec = (
        <a className={urlSecClass} href={URL} target="_blank" rel="noopener" key="more">
            More
        </a>
    )
    const moreInfoSec = (
        <div className={moreInfoSecClass}>
            Powered by
            <b> React</b>,<b> Tachyons </b>
            and {urlSec}
        </div>
    )

    return (
        <footer className={footerClass}>
            {logoSec} {moreInfoSec}
        </footer>
    )
}

export default Footer

const footerClass = "mid-gray f6"
const moreInfoSecClass = "pt3"
const urlSecClass = "mid-gray b link dim"
