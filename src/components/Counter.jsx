import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 5
        };
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    decrementCount = () => {
        this.setState({
            count: this.state.count - 1
        });
    }

    resetCount = () => {
        this.setState({
            count: 5
        });
    }
  
    render() {
        const { count } = this.state;
        const toneClass = count >= 8 ? 'is-rising' : count <= 2 ? 'is-low' : 'is-steady';

        return (
            <section className="panel feature-card counter-card" aria-labelledby="counter-title">
                <div className="section-heading">
                    <p className="eyebrow">Objective 3</p>
                    <h2 id="counter-title">Interactive counter</h2>
                </div>

                <div className={`counter-display ${toneClass}`}>
                    <span className="counter-label">Current score</span>
                    <p>{count}</p>
                    <span className="counter-note">
                        {count >= 8 && 'High emphasis is working well.'}
                        {count > 2 && count < 8 && 'Balanced emphasis keeps the layout calm.'}
                        {count <= 2 && 'Lower values surface the need for action quickly.'}
                    </span>
                </div>

                <div className="button-row">
                    <button type="button" className="ghost-button" onClick={this.decrementCount}>
                        Decrease
                    </button>
                    <button type="button" className="primary-button" onClick={this.incrementCount}>
                        Increase
                    </button>
                    <button type="button" className="ghost-button" onClick={this.resetCount}>
                        Reset
                    </button>
                </div>
            </section>
        );
    }
}

export default Counter;
