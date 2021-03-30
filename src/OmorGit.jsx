import React from 'react'

import react, { Fragment } from 'react';


function OmorGit() {
    let GithubRepoLink = "https://github.com/md-omor";

    return (
        <Fragment>
            <a href={ GithubRepoLink } target="_blank" rel="noopener noreferrer" style={{
                        "position": "absolute",
                        "right":0,
                        "border": 0,
                        "width": "150px",
                        "textDecoration" : "none",
                        "color" : "#d1cb17",
                        'fontFamily' : 'sans-serif'
                    }}>Omor On Github </a>
        </Fragment>
    );
}

export default OmorGit;