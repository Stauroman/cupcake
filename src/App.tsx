import React, {useEffect, useState} from 'react';
import './App.css';


import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3000/api/v1/'
});


const App: React.FC = () => {
    const [first, setfirst] = useState({});
    const [second, setsecond] = useState({});
    const [third, setthird] = useState({});
    useEffect(() => {
        getData("first", 0);
        getData("second", 1);
        getData("third", 2);
    }, []);

    const setarr = [setfirst, setsecond, setthird]

    const getData = async (market: string, index: number) => {
        await instance.get(`${market}`)
            .then(response => {
                setarr[index](response.data)
            })
            .catch(e => {
                console.log(e);
            });
    }
    console.log("first", first)
    console.log('second',second)
    console.log('third',third)


    return (
        <div>

        </div>
    );
}

export default App;
