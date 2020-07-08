import React  from 'react';

const Contact = () => {
    return (
        <div className="mw8 center justify-center ph2 center ">
            <div className="dt tc center ba mb4 mw7 mw7-ns shadow-2">
                <div className="dib w-50 tcl mb1 ph3">
                    <h4 className="f4 f4-l fw6">E-mail</h4>
                    <a className="dim db f5 f5-l black-70">imslab@imslab.org</a>
                    <br />
                </div>
                <div className="dib w-50 tcl mb1 ph3">
                    <h4 className="f4 f4-l fw6">電話 Tel.</h4>
                    <a className="f5 db black-70">+886-6-275-7575</a>
                    <a className="f5 black-70">Ext.62520-1004</a>
                </div>
                <div className="mb2 w-100 center pb2 ph3">
                    <h4 className="f4 f4-l fw6">地址 Addr.</h4>
                    <a className="dim f5 db mb3 black-70">701 台南市東區大學路 1 號 國立成功大學 成功校區 資訊系館 10 樓 65A04 室</a>
                    <a className="dim f5 db mb2 black-70">Room 65A04, 10th Floor, CSIE Building, Cheng-Kung Campus, No. 1, Daxue Road, East District, Tainan City 701, Taiwan (R.O.C.)</a>
                </div>
            </div>
            <div className="mt2 w-100 center b--dark-gray shadow-1">
                <iframe width="100%" height="400px" src="https://maps.google.com/maps?width=100%&amp;height=400&amp;hl=zh-TW&amp;coord=22.997143,120.221371&amp;q=22.997143,120.221371&amp;ie=UTF8&amp;t=&amp;z=15&amp;iwloc=B&amp;output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" />
            </div>
        </div>
    );
}

export default Contact;