import React from 'react';
import Header from '../Header';
import Texts from '../../texts';
import './IndeedMicroFE.scss';

const IndeedMicroFE = () => (
    <>
        <Header pageId="microfe"/>
        <section id="indeed-sec1">
            <div className="container">
                <h1>{Texts.IndeedMicroFE.title}</h1>
                <p className="contentText">{Texts.IndeedMicroFE.subtitle}</p>
            </div>
        </section>
        <section id="indeed-sec2">
            <div className="container indeed-illustration"></div>
        </section>
        <section id="indeed-sec3">
            <div className="container">
                <h4>{Texts.IndeedMicroFE.hero}</h4>
            </div>
        </section>
    </>
);

export default IndeedMicroFE;
