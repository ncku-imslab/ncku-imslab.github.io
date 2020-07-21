import React, { Component } from 'react';
import Markdown from 'react-markdown';
import professorData from '../data/members/prof';

const professor = { ...professorData };

Object.entries(professor).forEach(([key, value]) => {
    professor[key] = <Markdown
        source={value}
        linkTarget="_blank" />
});

class Professor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: []
        }
    }

    componentDidMount() {
        this.setState(state => {
            let list = state.open;
            list[0] = true;
            return list;
        })
    }

    handleClick = (index) => {
        this.setState(state => {
            let list = state.open;
            list[index] = !list[index];
            return list;
        })
    }

    render() {
        const { open } = this.state;
        const section = Object.entries(professor).map((entries, index) => {
            return (
                <div
                    className="black tl pa2 br1 mb2 mt3 bg-near-white"
                    key={entries[0]}
                >
                    <button className="navy dim f4 b w-100 tl bn pt1"
                        onClick={() => this.handleClick(index)}
                    > {entries[0]} {}
                        {!open[index] ?
                            <span
                                className="dib link"
                                style={{ animation: "shiftDownAnimation 2s infinite" }}
                            > ↓
                            </span>
                            :
                            <span
                                className="dib link"
                                style={{ animation: "shiftUpAnimation 2s infinite" }}
                            > ↑
                            </span>
                        }
                    </button>

                    {open[index] ?
                        <div className="pt2 ph3 tl f5 f5-ns lh-copy near-black">
                            <span className="f5">
                                {entries[1]}
                            </span>
                            <button
                                className="dim grow w-100 center f4 pb1 bn"
                                onClick={() => this.handleClick(index)}
                            >↑
                            </button>
                        </div>
                        : null
                    }
                </div>
            );
        });

        return (
            <div className="mw8 mw8-ns center bg-mid-gray pa2 ph5-ns shadow-5 br1">
                <div className="mb4 pb2">
                    <h1 className="pb2 self-gold">指導教授 Professor</h1>
                    <div className="bg-white center pv3"
                        style={{ maxWidth: "21rem" }}
                    >
                        <img
                            alt="The nicest professor in NCKU CSIE is staring at you σ`∀´)σ"
                            src={require('../images/tsaimh.jpg')}
                            className="br-100 h4 w4 center db ba b--black-10 pa2"
                            title=""
                        />
                        <div className="tc">
                            <a className="ttu dim link db f4 f4-ns navy b pt2 pb1 mv1" href="http://imslab.org/~tsaimh/">蔡 孟 勳</a>
                            <a className="ttu tracked dim link db f5 f5-ns navy b pv1 mv1" href="http://imslab.org/~tsaimh/">Meng-Hsun Tsai ↗</a>
                        </div>
                        <hr className="mw3 bb bw1 b--black-10 mt2 mb3" />
                        <div className="pb2">
                            <span className="lh-copy measure center f5 near-black db b pv1">
                                傳真 Fax.
                                </span>
                            <span className="lh-copy measure center f5 near-black db pv1">
                                +886-6-2747076
                                </span>
                        </div>
                        <div className="pb2">
                            <span className="lh-copy measure center f5 near-black db b pv1">
                                電話 Tel.
                                </span>
                            <span className="lh-copy measure center f5 near-black db pv1">
                                +886-6-275-7575 Ext.62518
                                </span>
                        </div>
                        <div>
                            <span className="lh-copy measure center f5 near-black db b pv1">
                                信箱 Email
                                </span>
                            <span className="dim lh-copy measure center f5 near-black db pv1">
                                tsaimh@csie.ncku.edu.tw
                                </span>
                        </div>
                    </div>

                    {section}

                </div>
            </div>
        );
    }
}

export default Professor;