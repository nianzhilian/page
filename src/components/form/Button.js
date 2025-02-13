import React from 'react'
import { Consumer } from './formContext';
export default class extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Consumer>
                {
                    (ctx)=>{
                        return (
                            <button onClick={()=>{
                                ctx.submit && ctx.submit();
                            }}>
                                {this.props.children}
                            </button>
                        )
                    }
                }
            </Consumer>
        )
    }
}