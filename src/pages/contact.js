import React from "react"

const titleClassNames = "f4 f4-l fw6"
const Contact = () => {
    return (
        <div className="mw8 center center ph2 center">
            <div className="dt tc center mb4 mw7 mw7-ns shadow-5 bg-near-white navy">
                <div className="dib w-50 tcl mb1 ph3">
                    <h4 className={titleClassNames}> E-mail </h4>
                    <span className="dim db f5 black"> imslab@imslab.org </span>
                    <br />
                </div>
                <div className="dib w-50 tcl mb1 ph3">
                    <h4 className={titleClassNames}> 電話 Tel. </h4>
                    <span className="f5 db black"> +886-6-275-7575 </span>
                    <span className="f5 black"> Ext.62520-1004 </span>
                </div>
                <div className="mb2 w-100 center pb2 ph3">
                    <h4 className={titleClassNames}> 地址 Addr. </h4>
                    <span className="dim f5 db mb3 black">
                        {" "}
                        701 台南市東區大學路 1 號 國立成功大學 成功校區 資訊系館 10 樓 65A04 室{" "}
                    </span>
                    <span className="dim f5 db mb2 black">
                        {" "}
                        Room 65A04, 10th Floor, CSIE Building, Cheng-Kung Campus, No. 1, Daxue Road, East District,
                        Tainan City 701, Taiwan (R.O.C.){" "}
                    </span>
                </div>
            </div>
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
        </div>
    )
}

export default Contact
