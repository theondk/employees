import "./app-filter.css";

const AppFilter = ({onFilter, selected}) => {
    const filters = [
        {id: 'all', text: 'Все сотрудники'},
        {id: 'rise', text: 'На повышение'},
        {id: 'thousand', text: 'ЗП больше 1000$'}
    ];
    const btns = filters.map(item => {
        return (
            <button 
                key={item.id}
                type="button"
                className={item.id === selected ? 'btn btn-light' : 'btn btn-outline-light'}
                data-filter={item.id}
                onClick={onFilter}
            >
                {item.text}
            </button>
        )
    });

    return (
        <div className="btn-group">
            {btns}
        </div>
    )
}

export default AppFilter;