import "./app-info.css";

const AppInfo = ({eCount, pCount}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {eCount}</h2>
            <h2>Премию получат: {pCount}</h2>
        </div>
    )
}

export default AppInfo;