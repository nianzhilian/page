import React from 'react'
import TaskList from './taskList';
import AddTask from './addTask';
export default class TaskControl extends React.Component{
    state = {
        taskList:[]
    }
    handleChange = (value)=>{
        console.log(this)
        this.setState({
            taskList:this.state.taskList.concat({
                name:value,
                isFinish:false
            })
        });
    }
    constructor(props){
        super(props);
        
    }
    componentDidMount(){
        //组件加载完毕之后 随机生成状态
        const arr = [];
        for(let i = 0;i<10;i++){
            arr.push({
                name:`任务${i+1}`,
                isFinish:Math.random() > 0.5?true:false
            });
        }
        this.setState({
            taskList:[...this.state.taskList,...arr]
        })
    }
    render(){
        console.log("TaskControl的render函数运行",this.state.taskList.length);
        return (
            <div>
                <div>
                    <AddTask add={this.handleChange} />
                </div>
                <TaskList taskList={this.state.taskList}  />
            </div>
        )
    }
}