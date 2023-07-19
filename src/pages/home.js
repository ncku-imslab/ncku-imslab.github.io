import React, { useState, useEffect } from "react"
import Markdown from "react-markdown"
import News from "../data/home/news.json"
import Welcome from "../data/home/home.json"
import MustReadData from "../data/home/mustRead"
import { handleClickOpen1D, handleClickBoolean } from "../utils/handleClick"
import { shiftDownAnimationClass, shiftUpAnimationClass } from "../utils/classes"

// 1.(key, value) pairs are viewed as an array, thus: [key, value]
// 2. The following codes convert the value of a kv - pair directly to the.md format
// Extra:
// If there is a tab in front of lines of.md file, ex:
// `
//         ## content here
//     `
// The tab is viewed as a "code block", thus changing the font of the content and preventing the h2 tag from behaving the way we expected.
//     Therefore, do not format the data and start from the beginning of each line instead.
// If the data is already formatted as the above, we can convert code blocks into individual Markdown components:
//     > renderers={ { code: ({ value }) => <Markdown source={value} /> } }
// source: https://github.com/rexxars/react-markdown/issues/134

const mustRead = { ...MustReadData }
Object.entries(mustRead).forEach(([key, value]) => {
    mustRead[key] = <Markdown children={value} />
})

// Re-rendering is limited to this component only
const newsSec = (yearIndex, arrayLength) => {
    const news = { ...News[yearIndex] }

    const [arrayIndex, setArrayIndex] = useState(0)
    useEffect(() => {
        // 6 seconds
        const timer = setTimeout(() => {
            setArrayIndex((arrayIndex + 1) % arrayLength)
        }, 6000)

        return () => {
            clearTimeout(timer)
        }
    }, [arrayIndex])

    const title = "最新消息"
    return (
        <article className={newsSecClass} style={{ boxShadow: newsSecBoxShadow }}>
            <h1 className={newsTitleClass}> {title} </h1>
            <div className={newsAnimationSecClass} style={{ animation: newsAnimation }}>
                <span className={newsTypeClass}> {news[arrayIndex].type} </span>
                <span className={newsContentClass}> {news[arrayIndex].description} </span>
            </div>
        </article>
    )
}

const Home = () => {
    const today = new Date()
    let year = today.getFullYear()
    let yearIndex
    while (true) {
        yearIndex = "year " + year.toString()
        if (News[yearIndex]) {
            break
        } else {
            year--
        }
    }
    let arrayLength = News[yearIndex].length

    const [open, setOpen] = useState([])
    const [eng, setEng] = useState(false)

    const engButton = (attributes, border) => {
        const button = eng ? "中" : "EN"

        return (
            <button
                className={attributes + engSecClassAppended}
                style={{
                    right: border,
                    top: border,
                }}
                onClick={() => handleClickBoolean(eng, setEng)}
            >
                {button}
            </button>
        )
    }

    const titleSec = (title, index) => {
        const arrowAnimation = !open[index] ? shiftDownAnimationClass : shiftUpAnimationClass
        const arrow = !open[index] ? "↓" : "↑"

        return (
            <button className={titleClass} onClick={() => handleClickOpen1D(index, open, setOpen)}>
                {title}{" "}
                <span className={titleArrowClass} style={{ animation: arrowAnimation }}>
                    {arrow}
                </span>
            </button>
        )
    }

    const contentSec = (content, index) => {
        const arrow = "↑"

        return (
            <div className={contentSecClass}>
                <div className={contentClass}> {content} </div>
                <button className={contentArrowClass} onClick={() => handleClickOpen1D(index, open, setOpen)}>
                    {arrow}
                </button>
            </div>
        )
    }

    const talkSec = Object.entries(mustRead).map(([title, content], index) => {
        return (
            <div className={talkSecClass} key={title}>
                {titleSec(title, index)}
                {open[index] ? contentSec(content, index) : null}
            </div>
        )
    })

    const welcomeSec = () => {
        const title = eng ? Welcome["head-en"] : Welcome["head-ch"]
        const content = eng ? Welcome["content-en"] : Welcome["content-ch"]

        return (
            <section className={welcomeSecClass} style={{ boxShadow: welcomeSecBoxShadow }}>
                {engButton("near-white f5", "12px")}
                <h1 className={welcomeTitleClass}>{title}</h1>
                <div className={welcomeContentClass}>{content}</div>
                <div className={paddingHorizontal}>{talkSec}</div>
            </section>
        )
    }

    return (
        <div>
            {newsSec(yearIndex, arrayLength)} {welcomeSec()}
        </div>
    )
}

export default Home

const newsSecClass = "mw6 mw6-ns center ba br3 b--black-10"
const newsSecBoxShadow = "2px 2px 4px 0px rgba(0, 0, 0, 0.25)"
const newsTitleClass = "bg-near-white pv2 ph3 mv0 mid-gray f4 br3 br--top"
const newsAnimationSecClass = "v-mid pv3 ph3 tc f5 bt b--black-10"
const newsAnimation = "fadedAnimation 6s infinite"
const newsTypeClass = "ph1 dark-red b"
const newsContentClass = "ph2 near-black"

const welcomeSecClass = "relative bg-mid-gray mw7 mw7-ns pv3 ph5-ns mt4 center"
const welcomeSecBoxShadow = "0px 10px 8px -2px rgba(0, 0, 0, 0.6)"
const welcomeTitleClass = "mb4 self-gold"
const welcomeContentClass = "ph4 pb3 lh-copy center white f5"
const paddingHorizontal = "ph2"
const engSecClassAppended = " pa1 absolute b link dim grow bn"
const talkSecClass = "bg-near-white mw6 mw7-ns center mv3 br1"
const titleClass = "w-100 pv2 ph3 mv0 near-black f4 dim bn"
const titleArrowClass = "dib near-black"
const contentSecClass = "pa3 tl bt b--dark-gray"
const contentClass = "ph1 lh-copy center f5 f5-ns"
const contentArrowClass = "w-100 pt1 f4 fw5 dim grow bn"
