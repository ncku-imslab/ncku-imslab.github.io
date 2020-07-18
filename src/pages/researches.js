import React from 'react';
import Markdown from 'react-markdown';
import researchesData from '../data/researches/researches';

const research = { ...researchesData };

Object.entries(research).forEach(([key, value]) => {
    research[key] = <Markdown
        source={value}
        linkTarget="_blank" />
});

const researchSection = Object.entries(research).map((entries) => {
    console.log(entries[1])
    return (
        <div className="center br1">
            <h1 className="navy pb2 near-black bb bw1">
                {entries[0]}
            </h1>
            <p className="pv1 tl f5 f5-ns ph1 lh-copy center">
                {entries[1]}
            </p>
        </div>
    )
});

const Researches = () => {
    return (
        <div className="mw8 mw8-ns center bg-near-white pa2 ph5-ns shadow-5 br1">
            {researchSection}
            <p className="lh-copy center f5 ph4 pb2">
                hello
            </p>


        </div>
    );
}

export default Researches;