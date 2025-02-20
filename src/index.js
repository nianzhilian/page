import React, { useId, useState, useEffect, useReducer,useCallback,useImperativeHandle,useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import PagerContainer from './components/PagerContainer';
import CheckBoxGroup from './components/common/CheckBoxGroup';
import Test from './components/taks/Test';
import { getStudents } from './service/students';
import { Pager } from './components/page';
const root = ReactDOM.createRoot(document.getElementById('root'));

function useStudents(page,size){
    const [stus, setStus] = useState();
    useEffect(() => {
        (async function(){
            const obj = await getStudents(page,size);
            setStus(obj)
        })()
    }, [page,size]);
    return stus;
}

class StudentList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const arr = this.props.stus.map((it, index, array) => <li key={it._id}>{it.title}</li>)
        return (
            <ul>
                {arr}
            </ul>
        )
    }
}

function Test1(){
    const [page, setPage] = useState(1);
    const [limit] = useState(50);
    const stus = useStudents(page,limit);
    console.log(stus)
    return (
        <div>
            <StudentList stus = {stus?stus.movieList:[]} />
            <Pager movieTotal = {stus?stus.movieTotal:0} limit={limit} current={page} onPage={
                (target)=>{
                    setPage(target)
                }
            } />
        </div>
    )
}

root.render(<Test1 />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
