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

const App: React.FC = () => {
    const [first, setFirst] = useState<IRates>(initialRates);
    const [second, setSecond] = useState<IRates>(initialRates);
    const [third, setThird] = useState<IRates>(initialRates);

    useEffect(() => {
        getData("first/poll", setFirst);
        getData("second/poll", setSecond);
        getData("third/poll", setThird);
    }, []);


    const getData = async (market: string, setter: React.Dispatch<React.SetStateAction<IRates>>) => {
        await instance.get(`${market}`)
            .then(response => {
                setter(response.data.rates)
            })
            .catch(e => {
                console.log(e);
            });
    }
    console.log(first)
    console.log(second)
    console.log(third)

    return (

        <Table first={first}
               second={second}
               third={third}
        />

    );
}

export default App;
