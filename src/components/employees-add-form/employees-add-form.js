import './employees-add-form.css';
import { Component } from 'react';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
                name: '',
                salary: ''
        }
    }

    onInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    toPush = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
    }

    render() {
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    onSubmit={this.toPush}
                    className="add-form d-flex">
                    <input type="text"
                        required
                        onChange={this.onInput}
                        name="name"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" />
                    <input type="number"
                        onChange={this.onInput}
                        required
                        name="salary"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" />
                    <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;