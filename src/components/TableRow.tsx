import React from "react";


interface ITableRowProps {
    first: number,
    second: number,
    third: number,
    label: string,
}

export const TableRow = ({first, second, third, label}: ITableRowProps): JSX.Element => {

    return (
        <tr>
            <td>{label}</td>
            <td className={(first < second && first < third) ? 'minimalValue': ''}>{first}</td>
            <td className={(second < first && second < third) ? 'minimalValue': ''}>{second}</td>
            <td className={(third < second && third < first) ? 'minimalValue': ''}>{third}</td>
        </tr>
    )
}