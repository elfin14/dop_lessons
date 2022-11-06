import React, {useState} from 'react';
import './App.css';
import {Button} from './components/Button';

type DataType = {
    userId: number,
    id: number,
    title: string,
    completed: boolean

}

function App() {
    const [data, setData] = useState<DataType[]>([])


    const useCallback = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setData(json))
    }
    const Clear =()=>{
        setData([])
    }
    return (
        <div className="App">
            <Button name={'Get name'} callback={useCallback}/>
            <Button name={'Clear name'} callback={Clear}/>
            <ul>
                {data.map((el) => {
                    return (<li key={el.id}>
                            <span>{el.userId}</span>
                            <span>{el.title}</span>
                            <span>{String(el.completed)}</span>
                        </li>
                    )
                })}
            </ul>

        </div>
    );
}

export default App;
