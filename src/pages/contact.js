import React from "react"

const Contact = () => {
    const emailSec = (
        <div className={emailAndTelephoneSecClass}>
            <h4 className={titleClass}> E-mail </h4>
            <span className={emailClass}> imslab@imslab.org </span>
            <br />
        </div>
    )
    const telephoneSec = (
        <div className={emailAndTelephoneSecClass}>
            <h4 className={titleClass}> 電話 Tel. </h4>
            <span className={telephoneClass}> +886-6-275-7575 </span>
            <span className={extensionClass}> Ext.62520-1004 </span>
        </div>
    )
    const addressSec = (
        <div className={addressSecClass}>
            <h4 className={titleClass}> 地址 Addr. </h4>
            <span className={chineseAddressClass}>
                701 台南市東區大學路 1 號 國立成功大學 成功校區 資訊系館 10 樓 65A04 室
            </span>
            <span className={englishAddressClass}>
                Room 65A04, 10th Floor, CSIE Building, Cheng-Kung Campus, No. 1, Daxue Road, East District, Tainan City
            </span>
        </div>
    )
    const infoSec = (
        <div className={infoSecClass}>
            {emailSec} {telephoneSec} {addressSec}
        </div>
    )
    // for unknown reason, URL cannot be placed outside
    // this is customised, thus not extracting classes
    const iframeSec = (
        <iframe
            className="mt2 w-100 center"
            title="map"
            width="100%"
            height="400px"
            src="https://maps.google.com/maps?width=100%&amp;height=400&amp;hl=zh-TW&amp;coord=22.997143,120.221371&amp;q=22.997143,120.221371&amp;ie=UTF8&amp;t=&amp;z=15&amp;iwloc=B&amp;output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
        />
    )

    return (
        <div className={contactClass}>
            {infoSec} {iframeSec}
        </div>
    )
}

export default Contact

const contactClass = "ph2 center mw8"
const infoSecClass = "bg-near-white dt center mw7 mw7-ns mb4 shadow-5 tc navy"
const emailAndTelephoneSecClass = "dib w-50 ph3 mb1"
const titleClass = "f4"
const emailClass = "db f5 black dim"
const telephoneClass = "db f5 black"
const extensionClass = "f5 black"
const addressSecClass = "w-100 ph3 pb2 center mb2"
const chineseAddressClass = "db mb3 f5 black dim"
const englishAddressClass = "db mb2 f5 black dim"
