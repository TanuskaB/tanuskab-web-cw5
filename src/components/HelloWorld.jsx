import React, { Component } from 'react';

class HelloWorld extends Component {
    render() {
        return (
            <section className="hero panel">
                <div className="hero-copy">
                    <p className="eyebrow">Design Practice Dashboard</p>
                    <h1>Build a clearer interface with readable rhythm and consistent style.</h1>
                    <p className="hero-text">
                        This page turns a few simple React exercises into a visual hierarchy demo.
                        Headline content leads first, supporting details stay secondary, and the
                        controls below let you compare the UX impact right away.
                    </p>
                </div>

                <div className="hero-metrics" aria-label="Design objectives">
                    <div className="metric-card">
                        <span className="metric-value">01</span>
                        <span className="metric-label">Readability first</span>
                    </div>
                    <div className="metric-card">
                        <span className="metric-value">02</span>
                        <span className="metric-label">Shared style tokens</span>
                    </div>
                    <div className="metric-card">
                        <span className="metric-value">03</span>
                        <span className="metric-label">Fast UX feedback</span>
                    </div>
                </div>
            </section>
        );
    }
}

export default HelloWorld;
