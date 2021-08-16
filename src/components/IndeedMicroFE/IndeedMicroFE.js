import React, { useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Texts from '../../texts';
import './IndeedMicroFE.scss';

const IndeedMicroFE = () => {
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    return (
        <>
            <Header pageId="microfe"/>
            <section id="indeed-sec1">
                <div className="container">
                    <h1>{Texts.IndeedMicroFE.title}</h1>
                    <h4 className="contentText">{Texts.IndeedMicroFE.subtitle}</h4>
                    <p className="disclaimer">{Texts.IndeedMicroFE.disclaimer}</p>
                </div>
            </section>
            <section id="indeed-sec2">
                <div className="container indeed-illustration"></div>
            </section>
            <section id="indeed-sec3">
                <div className="container">
                    <h4>{Texts.IndeedMicroFE.hero}</h4>
                    <p>{Texts.IndeedMicroFE.p1}</p>
                    <img src="/imgs/indeed-illstration2.png" alt="Illustration" aria-hidden/>
                    <p>Design wise, foundational component libraries and guidelines do exist. But there's a million ways to achieve the same look and feel so a lot of time devs end up abusing them with CSS hacks and endless overrides. We need to put some constraints and point out a common direction for styling. Our company utilized CSS-in-JS library <a href="https://emotion.sh/docs/introduction">Emotion</a> and a ported helper library from <a href="https://styled-system.com/">Styled System</a> to enable theme-based styling.</p>
                    <p><b>This approach removes almost all global CSS and helps scope styling to component level.</b></p>
                    <p>The base styling is written into a context library which offers themes, fonts, spacing scales and color palettes. Every component in the UI library is built with styles that are fully responsive and <a href="https://theme-ui.com/sx-prop/#theme-aware-properties">theme-aware</a>. From there, believe it or not, the amount of CSS which devs need to write reduces exponentially. Customization becomes easier. Complicated overrides become very rare. As a result, much higher consistency in UI presentation is achieved.</p>
                    <img src="/imgs/indeed-oh2.png" alt="Illustration" aria-hidden/>
                    <p>Engineering wise, teams that I work with have observed bad performance and increasing overhead cost in collaboration. It happens when working in a monorepo and when complex operations on global states are required. However, with Webpack 5 coming into sight, these problems have a solution.</p>
                    <p><b>Module federation introduced by Webpack 5 opens up the possibility of a micro front end architecture.</b></p>
                    <p>Several Indeed monorepos have been deprecated in favor of one root app that hosts all modules. With a dedicated platform team providing a single instance of security, data framework, tooling and globally shared UI, each product team can now focus on features and/or pages that they own and they are expert at. We also encourage to engage open source community and use widely-tested out-of-the-box solutions to increase system robustness and dev productivity.</p>
                    <img src="/imgs/indeed-oh3.png" alt="Illustration" aria-hidden/>
                    <p>Several design patterns are applied: We use abstraction to create clearly layered dependencies:</p>
                    <ul>
                        <li><b>Router:</b> front end router provided by host app</li>
                        <li><b>API and data layer:</b> all API calls(REST and Graphql) are wrapped into React hooks, data are handled with React context</li>
                        <li><b>Common UI components and functions layer:</b> these are written into libraries and are imported by the team as needed</li>
                        <li><b>Business logic layer:</b> UI, flows and user interactions</li>
                    </ul>
                    <p>In a micro front end architecture, modular pattern is of course applied. Theoretically, any module can host and/or invoke any other module. But a constraint is introduced that dependencies must point inward to help avoid circular import and coupling.</p>
                    <ul><li>{`Router/Flow -> Page -> Component -> Function/Style`}</li></ul>
                    <p>During Q2 and Q3 of 2021, I drove the migration of my team. My team's new repository was designed as a pure front end repo with every feature as an exposed module. In early Q2, I worked with the platform team to create a new route in the root app for my team and created toy modules to experiment on exposing and invoking them. As a second step, a data layer was added and tracking was tested. These experimental steps produced informative <b>design documentations and best practise guidelines</b> which were shared with the whole team. After the experimental phase, production code migration started. I coordinated with engineers across teams to <b>organize training sessions and share feedback</b>. I kept syncing with the platform team to add more support for a variety of features. Before release, I helped build CI/CD pipelines, worked with QA engineers to implement unit tests, integration tests and applied translations for international markets. After release, I was also responsible to monitor production health and check conversion rate.</p>
                    <p>Challenges are big. One example is: The product needs to stay live so an incremental migration approach was created. However because the modules are loaded asynchronously, their code is executed last following the React's execution priority rank. Some UI before the fold cannot afford this lag and needs to show up instantly. To overcome this problem, we also built module preload tools.</p>
                    <img src="/imgs/indeed-oh.png" alt="Illustration" aria-hidden/>
                    <p>The outcome is rewarding. Performance for almost all pages increased and error rates were down. We fixed dozens of UI inconsistencies and broken experiences along the way, so that employers on Indeed can focus on hiring with a more pleasant journey and higher productivity.</p>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default IndeedMicroFE;
