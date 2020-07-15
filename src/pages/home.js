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
            news: News[yearIndex],
            mustreadLength: mustreadLength,
            mustreadOpen: list
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(index) {
        // The idea of setstate() being asynchronous is perhaps that only after the state is retrieved can we proceed.
       this.setState(state => {
           let list = state.mustreadOpen;
           list[index] = !list[index];
           return list;
       })
    }

    componentDidMount() {
        this.timeout = setInterval(() => {
            const index = this.state.arrayIndex;
            this.setState({ arrayIndex: index === this.state.arrayLength - 1 ? 0 : index + 1 });
        }, 6000);
    }

    componentWillUnmount() {
        clearInterval(this.timeout);
    }

    render() {
        const { arrayIndex, news, mustreadOpen } = this.state;

        const Mustread = { ...MustreadData };
        Object.entries(Mustread).forEach(([key]) => {
            // console.log(Mustread[key])
            Mustread[key] = <Markdown
                source={Mustread[key]}
                renderers={{ code: ({ value }) => <Markdown source={value} /> }}
                linkTarget="_blank" />
        });
        const mustreadList = Object.entries(Mustread).map((value, key) => {
            return (
                <article className="center mw6 mw7-ns hidden ba mv3 br2 b--dark-gray bg-near-white">
                    <button
                        className="dim w-100 f4 mv0 pv2 ph3 bn near-black"
                        onClick={() => this.handleClick(key)}
                    >
                        {value[0]}{" "}
                        {!mustreadOpen[key] ?
                            <a
                                href=""
                                className="dib link black"
                                style={{ animation: "shiftDownAnimation 2s infinite" }}
                            > ↓
                            </a>
                            : <a
                                href=""
                                className="dib link black"
                                style={{ animation: "shiftUpAnimation 2s infinite" }}
                            >↑
                            </a>
                        }
                    </button>

                    {mustreadOpen[key] ?
                        <div className="tl pa3 bt b--dark-gray">
                            <p className="f5 f5-ns ph1 lh-copy center">
                                {value[1]}
                            </p>
                            <button
                                className="dim grow w-100 f4 pv1 bn"
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
                    style={{ boxShadow: "2px 2px 4px 0px rgba( 0, 0, 0, 0.25 )" }}
                >
                    <h1 className="f4 bg-near-white br3 br--top mid-gray mv0 pv2 ph3">最新消息</h1>
                    <div className="db pv3 ph2 bt b--black-10 v-mid tc">
                        <a
                            className="ph2 f5 dark-red"
                            style={{ animation: "fadedAnimation 6s infinite" }}
                        ><b>{news[arrayIndex].type}</b>
                        </a>
                        <a
                            className="ph2 f5 near-black"
                            style={{ animation: "fadedAnimation 6s infinite" }}
                        >{news[arrayIndex].description}
                        </a>
                    </div>
                </article>

                <section className="mt4 mw7 mw7-ns center bg-dark-gray pv3 ph5-ns"
                    style={{ boxShadow: "0px 10px 8px -2px rgba( 0, 0, 0, 0.6 )" }}>
                    <h1 className="mb4 gold">
                        {Welcome.head1}
                    </h1>
                    <p className="lh-copy center f5 ph4 pb2 white">
                        {Welcome.content1}
                    </p>
                    <div className="ph2">
                        {mustreadList}
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;