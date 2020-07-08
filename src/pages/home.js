import React from 'react';
import Markdown from 'react-markdown';
import News from '../data/home/news.json';
import Welcome from '../data/home/home.json';
import MustreadData from '../data/home/must-read';

class Home extends React.Component {
    constructor(props) {
        super(props);
        const today = new Date();
        let year, yearIndex, arrayLength, mustreadLength;
        try {
            year = today.getFullYear();
            yearIndex = "year " + year.toString();
            arrayLength = News[yearIndex].length;
            // console.log(arrayLength);
        } catch (err) {
            year = today.getFullYear() - 1;
            yearIndex = "year " + year.toString();
            arrayLength = News[yearIndex].length;
        }

        let list = [];
        mustreadLength = Object.entries(MustreadData).length;
        for (let i = 0; i < mustreadLength; i++) {
            list.push(false);
        }

        this.state = {
            arrayIndex: 0,
            arrayLength: arrayLength,
            opacity: 1,
            timer: 0,
            news: News[yearIndex],
            mustreadLength: mustreadLength,
            mustreadOpen: list,
            shiftDown: 0,
            shiftUp: 3
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(index) {
        let list = this.state.mustreadOpen;
        list[index] = !list[index];
        this.setState(() => {
            return list;
        })
    }

    componentDidMount() {
        this.timeout = setInterval(() => {
            const opacity = this.state.opacity;
            const time = this.state.timer;
            const index = this.state.arrayIndex;
            const shiftDown = this.state.shiftDown;
            // const shiftUp = this.state.shiftUp;
            this.setState({ timer: time + 100 });

            if (time >= 3000) {
                this.setState({ opacity: opacity - 0.1 });
            }
            if (time === 4000) {
                if (index === this.state.arrayLength - 1) {
                    this.setState({ arrayIndex: 0 });
                } else {
                    this.setState({ arrayIndex: index + 1 })
                }
                this.setState({ opacity: 1, timer: 0 });
            } else if (time % 800 === 0 && shiftDown !== 0) {
                this.setState({ shiftDown: 0 });
                this.setState({ shiftUp: 0 });
            } else if (time % 800 === 0 && shiftDown === 0) {
                this.setState({ shiftDown: 3 });
                this.setState({ shiftUp: 3 });
            }
            // When resetting time from 4000 to 0, shifts twices.
        }, 100);

    }

    componentWillUnmount() {
        clearInterval(this.timeout);
    }

    render() {
        const Mustread = { ...MustreadData };
        Object.entries(Mustread).forEach(([key]) => {
            // console.log(Mustread[key])
            Mustread[key] = <Markdown
                source={Mustread[key]}
                renderers={{ code: ({ value }) => <Markdown source={value} /> }}
                linkTarget="_blank" />
        });
        const { arrayIndex, opacity, news, mustreadOpen, shiftUp, shiftDown } = this.state;
        const mustreadList = Object.entries(Mustread).map((value, key) => {
            return (
                <article className="center mw6 mw7-ns hidden ba mv3 br2 b--dark-gray bg-white">
                    <button
                        className="dim w-100 f4 mv0 pv2 ph3 bn"
                        onClick={() => this.handleClick(key)}
                    >
                        {value[0]}{" "}
                        {!mustreadOpen[key] ?
                            <a 
                                href=""
                                className="dib link black"
                                style={{ transform: `translateY(${shiftDown}px)` }}
                            >↓
                            </a>
                            : <a
                                href=""
                                className="dib link black"
                                style={{ transform: `translateY(${shiftUp}px)` }}
                            >↑
                            </a>
                        }
                    </button>

                    {mustreadOpen[key] ?
                        <div className="tl pa3 bt b--dark-gray">
                            <p className="tl f5 f5-ns lh-copy mv0 center">
                                {value[1]}
                            </p>
                            <button
                                className="dim grow w-100 f4 mv0 pv2 ph3 bn"
                                onClick={() => this.handleClick(key)}
                            >↑
                            </button>
                        </div>
                        : null
                    }
                </article>
            )
        });
        return (
            <div>
                <article
                    className="center mw6 mw6-ns br3 hidden ba b--black-10"
                    style={{"box-shadow": "2px 2px 4px 0px rgba( 0, 0, 0, 0.2 )"}}
                >
                    <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">最新消息</h1>
                    <div className="pv3 ph2 bt b--black-10">
                        <table className="f6 w-100 center"
                            cellspacing="0">
                            <tbody className="lh-copy">
                                <tr>
                                    <td
                                        className="pv2 ph1 f5 dark-red"
                                        style={{ opacity: opacity }}
                                    ><b>{news[arrayIndex].type}</b>
                                        <br />
                                    </td>
                                    <td
                                        className="pv2 ph3 f5"
                                        style={{ opacity: opacity }}
                                    >{news[arrayIndex].description}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </article>
                <section className="mt4 mw7 mw7-ns center bg-light-gray pa2 ph5-ns shadow-2">
                    <h3></h3>
                    <h1 className="mb4" >{Welcome.head1}</h1>
                    <p className="lh-copy center f5 ph4 pb2">
                        {Welcome.content1}
                    </p>
                    <div className="ph2">
                        {mustreadList}
                    </div>

                </section>
            </div >
        );
    }
}

export default Home;