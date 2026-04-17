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

        return (
            <div>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.state.search}
                    onChange={this.onSearch}
                />

                <select value={this.state.type} onChange={(e) => this.onFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Fruit">Fruit</option>
                    <option value="Vegetable">Vegetable</option>
                </select>

                <ul>
                    {items
                        .filter(this.filterItem)
                        .map((item) => (
                            <li key={`${item.name}-${item.type}`}>
                                {item.name} ({item.type})
                            </li>
                        ))}
                </ul>
            </div>
        );
    }
}

export default ProduceList;
