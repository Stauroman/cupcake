import React from "react";
import {IRates} from "./App";
import {TableRow} from "./TableRow";

export interface ITableProps {
    first: IRates,
    second: IRates,
    third: IRates,
}

export const Table = ({first, second, third}: ITableProps): JSX.Element => {

    const getCellResult = (a: number, b: number): number => {
        if (a === 0 || b === 0) {
            return 0;
        } else {
            //округляем до 2х знаков после запятой,
            // отрицательные значения приводим к положительным
            return parseFloat(Math.abs(a / b).toFixed(2))

        }
    }
    return (
        <table className='ratesTable'>
            <thead>
            <tr>
                <th>Pair name/market</th>
                <th>First</th>
                <th>Second</th>
                <th>Third</th>
            </tr>
            </thead>
            <tbody>
            <TableRow
                label={"RUB/CUPCAKE"}
                first={getCellResult(first.RUB, 1)}
                second={getCellResult(second.RUB, 1)}
                third={getCellResult(third.RUB, 1)}
            />
            <TableRow
                label={"USD/CUPCAKE"}
                first={getCellResult(first.USD, 1)}
                second={getCellResult(second.USD, 1)}
                third={getCellResult(third.USD, 1)}
            />
            <TableRow
                label={"EUR/CUPCAKE"}
                first={getCellResult(first.EUR, 1)}
                second={getCellResult(second.EUR, 1)}
                third={getCellResult(third.EUR, 1)}
            />
            <TableRow
                label={"RUB/USD"}
                first={getCellResult(first.RUB, first.USD)}
                second={getCellResult(second.RUB, second.USD)}
                third={getCellResult(third.RUB, third.USD)}
            />
            <TableRow
                label={"RUB/EUR"}
                first={getCellResult(first.RUB, first.EUR)}
                second={getCellResult(second.RUB, second.EUR)}
                third={getCellResult(third.RUB, third.EUR)}
            />
            <TableRow
                label={"EUR/USD"}
                first={getCellResult(first.EUR, first.USD)}
                second={getCellResult(second.EUR, second.USD)}
                third={getCellResult(third.EUR, third.USD)}
            />
            </tbody>
        </table>)
}