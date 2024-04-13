const React = require('react')
const { EOL } = require('os')

module.exports = function TaskList({ user }) {
    const tasks = [
        {
            date: '09.10.2021, 15:46',
            type: 'Измерение',
            status: 'В работе',
            jobsList: 'Образец/серия: 000100057935_170000010325_0000251849',
        },
        {
            date: '12.10.2021, 12:17',
            type: 'Калибровка',
            status: 'В работе',
            jobsList: `Номер колонки: Колонка 2
        Образец: Образец 2
        Образец: образец 1
        Метод: метов тестовый
        Номер колонки: Колонка 1`,
            result: 'Промывка с указанием вещества: Вещество ...',
        },
    ]
    return (
        <table className="task-list">
            <thead>
                <tr>
                    <th>Начало</th>
                    <th>Тип работ</th>
                    <th>Работы</th>
                    <th>Результат</th>
                    <th>Пользователь</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task, index) => (
                    <tr key={index} className="task-item">
                        <td className="task-date">{task.date}</td>
                        <td className="task-type-status">
                            <div className="in-progress">{task.status}</div>
                            <div>{task.type}</div>
                        </td>
                        <td className="task-jobs-list" style={{ verticalAlign: 'top' }}>
                            <br />
                            {task.jobsList.split(EOL).map((line, lineIndex) => (
                                <span key={lineIndex}>
                                    {line}
                                    <br />
                                </span>
                            ))}
                        </td>
                        <td className="task-result">
                            {task.result}
                            <svg
                                width="18"
                                height="14"
                                viewBox="0 0 18 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M6.00039 11.2L1.80039 7.00001L0.400391 8.40001L6.00039 14L18.0004 2.00001L16.6004 0.600006L6.00039 11.2Z"
                                    fill="#23B04A"
                                    fill-opacity="0.87"
                                />
                            </svg>
                        </td>
                        <td className="task-user">{user.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
