import React from 'react';
import Texts from '../../texts';
import './IndeedPage.scss';

const IndeedPage = () => (
    <div className="container job-container">
        {Texts.IP.map((job, i) => (
            <div key={i} className="job-container-inner">
                <div className="job-container-title">
                    <h2>{job.title}</h2>
                    {job.icons && (
                        <div className="job-container-icons">
                            {job.icons.map((icon, j) => (
                                <img key={`icon-${i}-${j}`} src={icon} alt="Icons" aria-hidden/>
                            ))}
                        </div>
                    )}
                    <p>{job.subtitle}</p>
                </div>
                {job.contents.length > 0 && job.contents.slice(0,2).map((keyword, j) => (
                    <div key={`jobcontent-top-${i}-${j}`} className={`jobcontent-top jobcontent-top-${j%2 === 1 ? 'odd' : 'even'}`}>
                        <div>
                            <h4>{keyword.title}</h4>
                            <p>{keyword.content}</p>
                        </div>
                        <div>
                            <img src={keyword.illustration} alt="Illustration" aria-hidden/>
                        </div>
                    </div>
                ))}
                {job.contents.length > 0 && (
                    <div className="jobcontent-bottom">
                        {job.contents.slice(2).map((keyword, j) => (
                            <div key={`jobcontent-bottom-${i}-${j}`}>
                                <img src={keyword.illustration} alt="Illustration" aria-hidden/>
                                <h4>{keyword.title}</h4>
                                <p>{keyword.content}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        ))}
    </div>
);

export default IndeedPage;
