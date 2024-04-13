const React = require('react')

module.exports = function TimeFilters() {
    return (
        <div className="time-filters">
            <button className="time-filter-button">День</button>
            <button className="time-filter-button">Неделя</button>
            <button className="active time-filter-button">2 Недели</button>
            <button className="time-filter-button">Месяц</button>
            <button className="time-filter-button">3 Месяца</button>
            <button className="time-filter-button">Полгода</button>
        </div>
    )
}
