import React from "react"

const Contact = () => {
    const emailSec = () => {
        const title = "E-mail"
        const email = "imslab@imslab.org"

        return (
            <div className={emailAndTelephoneSecClass}>
                <h4 className={titleClass}> {title} </h4>
                <span className={emailClass}> {email} </span>
            </div>
        )
    }
    const telephoneSec = () => {
        const title = "電話 Tel."
        const extension = "(03) 571-2121 Ext.59275"

        return (
            <div className={emailAndTelephoneSecClass}>
                <h4 className={titleClass}>{title} </h4>
                <span className={extensionClass}> {extension}</span>
            </div>
        )
    }
    const addressSec = () => {
        const title = "地址 Addr."
        const chineseAddress = "300093 新竹市東區大學路1001號 電資大樓 708室"
        const englishAddress =
            "Room 708, Microelectronics and Information System Research Building, No. 1001, Daxue Rd. East Dist., Hsinchu City 300093, Taiwan"

        return (
            <div className={addressSecClass}>
                <h4 className={titleClass}> {title} </h4>
                <span className={chineseAddressClass}>{chineseAddress}</span>
                <span className={englishAddressClass}>{englishAddress}</span>
            </div>
        )
    }
    const infoSec = (
        <div className={infoSecClass}>
            {emailSec()} {telephoneSec()} {addressSec()}
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
            frameBorder="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.2566341419392!2d120.99911677612114!3d24.786664348205175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346836105901e76f%3A0x2e57134e8cc18575!2sMicroelectronics%20and%20Information%20System%20Research%20(MIRC-NCTU)!5e0!3m2!1sen!2stw!4v1700553943821!5m2!1sen!2stw"
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
const telephoneClass = "f5 black db"
// add "!" to cancel out the last effect
const extensionClass = telephoneClass + "!"
const addressSecClass = "w-100 ph3 pb2 center mb2"
const chineseAddressClass = "db f5 black dim mb3"
const englishAddressClass = chineseAddressClass + "! mb2"
