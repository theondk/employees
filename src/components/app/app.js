import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';
import { Component } from 'react';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			employees: [
				{name: 'Alexander', salary: 8000, increase: true, like: true, id: 1},
				{name: 'Maxim', salary: 3000, increase: false, like: false, id: 2},
				{name: 'Dmitriy', salary: 4000, increase: false, like: false, id: 3}
			],
			searchText: '',
			selectedFilter: 'all',
		};
	}

	onToggleProp = (id, prop, salary) => {
		const {employees} = this.state;
		const idx = employees.findIndex(item => item.id === id);
		const copy = [...employees];
		if (prop === 'increase') {
			copy[idx].increase = !copy[idx].increase;
		} else if (prop === 'like'){
			copy[idx].like = !copy[idx].like;
		} else {
			copy[idx].salary = salary;
		}
		this.setState({
			employees: copy
		});
	}

	onSalary = (id, salary) => {
		this.onToggleProp(id, 'salary', salary);
	}

	onDelete = (id) => {
		this.setState(({employees}) => ({
			employees: employees.filter(item => item.id !== id)
		}));
	}

	onAdd = (name, salary) => {
		this.setState(({employees}) => ({
			employees: [...employees, {name, salary, increase: false, like: false, id: 2 + employees[employees.length - 1].id}]
		}));
	}

	onSearch = (text) => {
		this.setState({
			searchText: text
		});
	}

	toFilter = () => {
		const {employees, searchText, selectedFilter} = this.state;
		let filtered;
		switch(selectedFilter) {
			case 'all':
				filtered = employees.filter(item => item.name.indexOf(searchText) > -1);
				break;
			case 'rise':
				filtered = employees.filter(item => item.name.indexOf(searchText) > -1 && item.like === true);
				break;
			case 'thousand':
				filtered = employees.filter(item => item.name.indexOf(searchText) > -1 && item.salary > 1000);
				break;
			default:
				break;
		}

		return filtered;
	}

	onFilter = (e) => {
		this.setState({selectedFilter: e.currentTarget.getAttribute('data-filter')});
	}

	render() {
		const {employees, searchText, selectedFilter} = this.state;
		const pCount = employees.filter(item => item.increase === true);

		return (
			<div className="app">
				<AppInfo eCount={employees.length} pCount={pCount.length}/>
	
				<div className="search-panel">
					<SearchPanel onSearch={this.onSearch}/>
					<AppFilter onFilter={this.onFilter} selected={selectedFilter}/>
				</div>
				
				<EmployeesList onDelete={this.onDelete} onSalary={this.onSalary} onToggleProp={this.onToggleProp} employees={this.toFilter(searchText)}/>
				<EmployeesAddForm onAdd={this.onAdd}/>
			</div>
		);
	}
	}

export default App;
