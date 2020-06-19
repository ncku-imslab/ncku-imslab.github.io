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
            mustreadOpen: list
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
            }
        }, 100);

    }

    componentWillUnmount() {
        clearInterval(this.timeout);
    }

    render() {
        const Mustread = { ...MustreadData };
        Object.entries(Mustread).forEach(([key]) => {
            console.log(Mustread[key])
            Mustread[key] = <Markdown
                source={Mustread[key]}
                renderers={{ code: ({ value }) => <Markdown source={value} /> }}
                linkTarget="_blank" />
        });
        const { arrayIndex, opacity, news, mustreadOpen } = this.state;
        const mustreadList = Object.entries(Mustread).map((value, key) => {
            return (
                <article class="center mw6 mw7-ns hidden ba mv4 br2 b--dark-gray bg-white">
                    <button
                        class="dim w-100 f4 mv0 pv2 ph3 bn"
                        onClick={() => this.handleClick(key)}
                    >{value[0]}{" "}{!mustreadOpen[key] ?
                        <a className="dib">↓</a> : <a className="dib">↑</a>
                        }
                    </button>
                    {mustreadOpen[key] ?
                        <div class="tl pa3 bt b--dark-gray">
                            <p class="tl f5 f5-ns lh-copy mv0 center">
                                {value[1]}
                            </p>
                            <button
                                class="dim grow w-100 f4 mv0 pv2 ph3 bn"
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
                <article class="mv3 center mw6 mw6-ns br3 hidden ba b--black-10">
                    <h1 class="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">最新消息</h1>
                    <div class="pa3 bt b--black-10">
                        <table class="f6 w-100 center" cellspacing="0">
                            <tbody class="lh-copy">
                                <tr>
                                    <td class="pv3 pl3 f5 dark-red" style={{ opacity: opacity }}><b>{news[arrayIndex].type}</b></td>
                                    <td class="pv3 f5" style={{ opacity: opacity }}>{news[arrayIndex].description}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </article>
                <section class="mt4 mb3 mw5 mw7-ns center bg-light-gray pa2 ph5-ns">
                    <h3></h3>
                    <h1 class="mb4" >{Welcome.head1}</h1>
                    <p class="lh-copy center f5">
                        {Welcome.content1}
                    </p>
                    {mustreadList}
                </section>
            </div >
        );
    }
}

export default Home;