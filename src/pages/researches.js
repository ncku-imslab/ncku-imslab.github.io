import React from 'react';
import Markdown from 'react-markdown';
import researchesData from '../data/researches/researches';

const research = { ...researchesData };

Object.entries(research).forEach(([key]) => {
    research[key] = <Markdown
        source={research[key]}
        renderers={{ code: ({ value }) => <Markdown source={value} /> }}
        linkTarget="_blank" />
    console.log(research[key])
});

const researchList = Object.entries(research).map((value) => {
    return (
        <div className="center br1 pt1 bg-near-white">
            <h1 className="navy pb2 near-black bb bw1">
                {value[0]}
            </h1>
            <div className="pv1">
                <p className="tl f5 f5-ns ph1 lh-copy center">
                    {value[1]}
                </p>
            </div>

        </div>
    )
});

const Researches = () => {
    return (
        <div className="mw8 mw8-ns center bg-near-white pa3 ph5-ns shadow-5 br1">
            {researchList}
            <p className="lh-copy center f5 ph4 pb2">
                hello
            </p>


        </div>
    );
}

export default Researches;