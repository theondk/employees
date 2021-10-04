import './search-panel.css';
import { Component } from 'react';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    onText = (e) => {
        this.setState({
            text: e.target.value
        });
        this.props.onSearch(e.target.value);
    }

    render() {
        return (
            <input
                onChange={this.onText}
                type="text"
                value={this.state.text}
                className="form-control search-input"
                placeholder="Найти сотрудника"
            />
        )
    }
}

export default SearchPanel;