import './employees-list-item.css';
import { Component } from 'react';

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            salary: this.props.salary + '$'
        }
    }

    setSalary = (e) => {
        this.setState({
            salary: e.target.value
        });

        this.props.onSalary(e.target.value);
    }


    render() {
        const {name, increase, like, onToggleProp, onDelete} = this.props;
        let className = 'list-group-item d-flex justify-content-between';
        if (increase === true) {
            className += ' increase';
        }
        if (like === true) {
            className += ' like';
        }

        return (
            <li className={className}>
                <span onClick={onToggleProp} className="list-group-item-label" data-toggle="like">{name}</span>
                <input 
                    type="text" 
                    className="list-group-item-input"
                    value={this.state.salary}
                    onChange={this.setSalary}
                />
                <div className='d-flex justify-content-center align-items-center'>
                    <button onClick={onToggleProp}
                            data-toggle="increase"
                            type="button"
                            className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            onClick={onDelete}
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;