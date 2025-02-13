import React from 'react'
import Task from './task'

export default class TaskList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log('TaskList的render函数运行')
        const tasks = this.props.taskList.map((list,i)=><Task name={list.name} isFinish={list.isFinish} key={i} />)
        return (
            <ul>
                {tasks}
            </ul>
        )
    }
}