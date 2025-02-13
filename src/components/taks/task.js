import React from 'react'
//只运行一次模块 不做任何的导入
import './taks.css'

function Task(props){
    console.log('task的函数运行函数式组件');
    return (
        <li className={props.isFinish?'finish':''}>
            {props.name}
        </li>
    )
}

function memo(FnComponent){
    return class ContainerComponents extends React.PureComponent{
        constructor(props){
            super(props);
        }
        render(){
            return (
                <FnComponent {...this.props} />
            )
        }
    }
}

export default memo(Task);

// export default class Task extends React.Component{
//     constructor(props){
//         super(props);
//     }
//     shouldComponentUpdate(nextProps,nextState){
//         console.log(this.props,nextProps);
//         if(isEqual(this.props,nextProps)){
//             //不一样则重新渲染
//             return true;
//         }
//         //没有变化则跳过渲染
//         return false
//     }
//     render(){
//         console.log('task的函数运行');
//         return (
//             <li className={this.props.isFinish?'finish':''}>
//                 {this.props.name}
//             </li>
//         )
//     }
// }
Task.defaultProps = {
    name:'张三',
    isFinish:false
}
function isEqual(obj1,obj2){
    for (const key in obj1) {
        if(Object.is(obj1[key],obj2[key])){
            return false;
        }
    }
    return true;
}