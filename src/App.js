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
    render() {
        return (
            <div className="app-shell">
                <main className="app-layout">
                    <HelloWorld />

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
