import React from 'react'

export default class AddTask extends React.PureComponent{
    state = {
        name:''
    }
    constructor(props){
        super(props);
    }
    render(){
        console.log('addtask的render函数')
        return (
            <div>
                <input value={this.state.name} onChange={(e)=>{
                    this.setState({name:e.target.value})
                }} />
                <button onClick={()=>{
                    this.props.add && this.props.add(this.state.name);
                }}>新增</button>
            </div>
        )
    }
}