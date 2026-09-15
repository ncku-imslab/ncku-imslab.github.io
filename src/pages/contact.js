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
        const chineseAddress = "300093 新竹市東區大學路 1001 號 工程三館 117 室"
        const englishAddress =
            "Room 117, Engineering Building 3, National Yang Ming Chiao Tung University, No. 1001, Daxue Rd., East Dist., Hsinchu City 300093, Taiwan"

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
            src="https://www.google.com/maps?q=NYCU+Engineering+Building+3&output=embed"
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
