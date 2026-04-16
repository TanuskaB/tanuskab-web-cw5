import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

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
                    onChange={this.onSearch}
                />

                <DropdownButton title="Filter" onSelect={this.onFilter}>
                    <MenuItem eventKey="All">All</MenuItem>
                    <MenuItem eventKey="Fruit">Fruit</MenuItem>
                    <MenuItem eventKey="Vegetable">Vegetables</MenuItem>
                </DropdownButton>

                <ul>
                    {items
                        .filter(this.filterItem)
                        .map((item, index) => (
                            <li key={index}>
                                {item.name} ({item.type})
                            </li>
                        ))}
                </ul>
            </div>
        );
    }
}

export default ProduceList;
