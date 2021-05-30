import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import {Table} from "./Table";

const instance = axios.create({
    baseURL: 'http://localhost:3000/api/v1/'
});

export interface IRates {
    RUB: number,
    USD: number,
    EUR: number,
}

const initialRates:IRates = {
    RUB: 0,
    USD: 0,
    EUR: 0,
}

export const App: React.FC = () => {
    const [first, setFirst] = useState<IRates>(initialRates);
    const [second, setSecond] = useState<IRates>(initialRates);
    const [third, setThird] = useState<IRates>(initialRates);

    useEffect(() => {
        getData("first", setFirst);
        getData("second", setSecond);
        getData("third", setThird);
    }, []);


    const getData = async (market: string, setter: React.Dispatch<React.SetStateAction<IRates>>) => {
        await instance.get(`${market}`)
            .then(response => {
                setter(response.data.rates)
            })
            .catch(e => {
                console.log(e);
            });
        await getData(market,setter);
    }
    console.log('first/poll',first)
    console.log('second/poll',second)
    console.log('third/poll',third)

    return (

        <Table first={first}
               second={second}
               third={third}
        />

    );
}

