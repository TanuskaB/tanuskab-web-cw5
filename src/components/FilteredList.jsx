import React, { Component } from 'react';

class ProduceList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            type: "All"
        };
    }

    onSearch = (e) => {
        this.setState({ search: e.target.value.toLowerCase() });
    }

    onFilter = (eventKey) => {
        this.setState({ type: eventKey });
    }

    filterItem = (item) => {
        const matchesSearch = item.name
            .toLowerCase()
            .search(this.state.search) !== -1;

        const matchesType = this.state.type === "All"
            || item.type === this.state.type;

        return matchesSearch && matchesType;
    }

    render() {
        const { items } = this.props;
        const filteredItems = items.filter(this.filterItem);

        return (
            <section className="panel feature-card" aria-labelledby="filter-title">
                <div className="section-heading">
                    <p className="eyebrow">Objective 2</p>
                    <h2 id="filter-title">Keep patterns consistent across controls</h2>
                    <p className="section-copy">
                        Inputs, labels, spacing, and surfaces all reuse the same tokens so the
                        interface feels like one system instead of a set of separate parts.
                    </p>
                </div>

                <div className="filter-toolbar">
                    <label className="field">
                        <span>Search produce</span>
                        <input
                            type="text"
                            placeholder="Try apple or carrot"
                            value={this.state.search}
                            onChange={this.onSearch}
                        />
                    </label>

                    <label className="field">
                        <span>Filter by type</span>
                        <select
                            value={this.state.type}
                            onChange={(e) => this.onFilter(e.target.value)}
                        >
                            <option value="All">All</option>
                            <option value="Fruit">Fruit</option>
                            <option value="Vegetable">Vegetable</option>
                        </select>
                    </label>
                </div>

                <div className="results-summary">
                    <span>{filteredItems.length} items shown</span>
                    <span>Active filter: {this.state.type}</span>
                </div>

                <ul className="produce-list">
                    {filteredItems.map((item) => (
                        <li key={`${item.name}-${item.type}`} className="produce-item">
                            <div>
                                <strong>{item.name}</strong>
                                <p>{item.type}</p>
                            </div>
                            <span className="item-tag">{item.type}</span>
                        </li>
                    ))}
                </ul>

                {filteredItems.length === 0 && (
                    <p className="empty-state">
                        No items match that combination. Adjust the search or switch the filter.
                    </p>
                )}
            </section>
        );
    }
}

export default ProduceList;
