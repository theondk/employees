import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({employees, onDelete, onToggleProp, onSalary}) => {
    const employee = employees.map(info => {
        const {id, ...employee} = info;

        return (
            <EmployeesListItem 
                onSalary={(salary) => onSalary(id, salary)} 
                onDelete={() => onDelete(id)} 
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))} 
                key={id} {...employee}
            />
        )
    });

    return (
        <ul className="app-list list-group">
            {employee}
        </ul>
    )
}

export default EmployeesList;