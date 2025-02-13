import React from 'react'
import { Provider } from './formContext'
import Input from './Input'
import Button from './Button'
export default class Form extends React.Component{
    state = {
        formData:{},
        changeFormData:(name,val)=>{
            this.setState({
                formData:{
                    ...this.state.formData,
                    [name]:val
                }
            })
        },
        submit:()=>{
            this.props.onSubmit && this.props.onSubmit(this.state.formData);
        }
    }
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Provider value={this.state}>
                {this.props.children}
            </Provider>
        )
    }
}
Form.Input = Input;
Form.Button = Button;