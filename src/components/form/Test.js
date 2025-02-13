import React from 'react'
import Form from '.';

export default class extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Form onSubmit = {(datas)=>{
                console.log(datas)
            }}>
                <div>
                    <label>用户名：</label>
                    <Form.Input name="username" type="text" />
                </div>
                <div>
                    <label>密码：</label>
                    <Form.Input name="pwd" type="password" />
                </div>
                <div>
                    <Form.Button>
                        提交
                    </Form.Button>
                </div>
            </Form>
        )
    }
}