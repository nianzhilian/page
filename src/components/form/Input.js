import React from 'react'
import ctx from './formContext';
export default class Input extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        
    }
    render(){
        console.log(this.context)
        return (
            <input name={this.props.name} type={this.props.type} value={this.context.formData[this.props.name] || ''} onChange={(e)=>{
                this.context.changeFormData && this.context.changeFormData(this.props.name,e.target.value)
            }} />
        )
    }
}
Input.contextType = ctx;