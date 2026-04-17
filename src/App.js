import React, { Component } from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Counter from './components/Counter';
import FilteredList from './components/FilteredList';

const produce = [
    { name: "Apple", type: "Fruit" },
    { name: "Banana", type: "Fruit" },
    { name: "Carrot", type: "Vegetable" },
    { name: "Broccoli", type: "Vegetable" },
    { name: "Orange", type: "Fruit" },
    { name: "Spinach", type: "Vegetable" }
];

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            density: 'comfortable',
            contrast: 'balanced'
        };
    }

    updateDensity = (event) => {
        this.setState({ density: event.target.value });
    }

    updateContrast = (event) => {
        this.setState({ contrast: event.target.value });
    }

    render() {
        const { density, contrast } = this.state;

        return (
            <div className="app-shell" data-density={density} data-contrast={contrast}>
                <main className="app-layout">
                    <HelloWorld />

                    <section className="panel controls-panel" aria-labelledby="controls-title">
                        <div className="section-heading">
                            <p className="eyebrow">Objective 3</p>
                            <h2 id="controls-title">Test design choices instantly</h2>
                            <p className="section-copy">
                                Toggle spacing and contrast to see how small UI decisions
                                change readability and focus across the whole page.
                            </p>
                        </div>

                        <div className="control-grid">
                            <fieldset className="control-group">
                                <legend>Spacing density</legend>
                                <label className="segmented-option">
                                    <input
                                        type="radio"
                                        name="density"
                                        value="comfortable"
                                        checked={density === 'comfortable'}
                                        onChange={this.updateDensity}
                                    />
                                    <span>Comfortable</span>
                                </label>
                                <label className="segmented-option">
                                    <input
                                        type="radio"
                                        name="density"
                                        value="compact"
                                        checked={density === 'compact'}
                                        onChange={this.updateDensity}
                                    />
                                    <span>Compact</span>
                                </label>
                            </fieldset>

                            <fieldset className="control-group">
                                <legend>Contrast level</legend>
                                <label className="segmented-option">
                                    <input
                                        type="radio"
                                        name="contrast"
                                        value="balanced"
                                        checked={contrast === 'balanced'}
                                        onChange={this.updateContrast}
                                    />
                                    <span>Balanced</span>
                                </label>
                                <label className="segmented-option">
                                    <input
                                        type="radio"
                                        name="contrast"
                                        value="strong"
                                        checked={contrast === 'strong'}
                                        onChange={this.updateContrast}
                                    />
                                    <span>Strong</span>
                                </label>
                            </fieldset>
                        </div>
                    </section>

                    <section className="content-grid">
                        <Counter />
                        <FilteredList items={produce} />
                    </section>
                </main>
            </div>
        );
    }
}

export default App;
