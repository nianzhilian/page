import React from 'react';
//只运行一次模块不做任何的导入
import './pager.css'
import { Pager } from "./Pager";

class ErrorBound extends React.Component{
    state = {
        hasError:false
    }
    constructor(props){
        super(props);
    }
    static getDerivedStateFromError(error){
       return {
        hasError:true
       }
    }
    componentDidCatch(err,errInfo){
        console.log(err)
        console.log(errInfo)
    }
    render(){
        if(this.state.hasError){
            return (
                <div>soming is wrong</div>
            )
        }
        return this.props.children
    }
}

class Test extends React.Component{
    constructor(props){
        //构造函数只会执行一次 后续的渲染组件不会再次执行构造函数
        super(props);
    }
    // componentWillMount(){
    //     console.log('初始生命周期阶段-组件将要挂载');
    // }
    // componentDidMount(){
    //     console.log('初始生命周期阶段-组件挂载完毕');
    // }
    // componentWillReceiveProps(nextProps){
    //     //接受新的状态
    //     console.log(nextProps);
    //     console.log('组件生命周期活跃状态-componentWillReceiveProps')
    // }
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log('活跃状态-组件是否应该更新');
    //     return true;
    // }
    // componentWillUpdate(){
    //     console.log('活跃状态-组件将要更新')
    // }
    // componentDidUpdate(){
    //     console.log('活跃状态-组件更新完毕')
    // }
    // componentWillUnmount(){
    //     console.log('活跃状态-组件将要卸载')
    // }
    shouldComponentUpdate(){
        console.log('组件是否要更新')
        return true;
    }
    static  getDerivedStateFromProps(props,state){
        console.log('初始阶段或者活跃更新阶段都会执行这个生命周期函数')
    }
    getSnapshotBeforeUpdate(){
        console.log('组件将要更新')
    }
    componentDidUpdate(){
       console.log('组件更新完毕') 
    }
    render(){
        console.log('组件渲染')
        throw new Error('这是错误')
        return (
            <div>
                测试
            </div>
        )
    }
}

function Student({name, sex, birth}) {
    return (
        <li>
            【姓名】{name}
            【性别】{sex===1?"男":"女"}
            【出生年份】{birth}
        </li>
    )
}
function StudentList(props) {
    var stus = props.stus.map(item => <Student key={item.id} {...item} />)
    return (
        <ul>
            {stus}
        </ul>
    )
}

class Model extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillUnmount(){
        console.log('组件将要卸载');
    }
    render(){
        if(!this.props.isShow){
            return null;
        }
        return (
            <div className='model'>
                <p>正在加载中</p>
            </div>
        )
    }
}

function delay(){
    return new Promise((resolve, reject) => {
        console.log("创建promise对象的时候该回调函数就会执行");
        setTimeout(resolve,1000);
    })
}

export default class PagerContainer extends React.Component{
    state = {
        current:1,
        limit:10,
        total:100,
        panelPage:5,
        students: [],
        isLoading: false
    }
    onChangePage = (target)=>{
        console.log(target)
        //异步更新  不要依赖于他们的值 去更改下一次的状态
        this.setState({
            current:target
        })
        console.log('setstate:'+this.state.current)
        this.fetchStudents();
    }
    async fetchStudents() {
        this.setState({
            isLoading: true
        })
        const resp = await delay();
        // const resp = await fetch(`http://api.duyiedu.com/api/student/findByPage?appkey=demo13_1545210570249&page=${this.state.current}&size=${this.state.limit}`)
        //     .then(resp => resp.json())
        //     .then(resp => resp.data);
        this.setState({
            isLoading: false
        })
    }
    constructor(props){
        super(props);
        this.fetchStudents();
    }
    render(){
        //const comp = this.state.isLoading?<Model />:null;
        return (
            <>
            <ErrorBound>
                <StudentList stus={this.state.students} />
                <div className='pager'>
                    <Pager {...this.state} onChangePage = {this.onChangePage} />
                </div>
                <Test />
                {/* {comp} */}
                <Model isShow={this.state.isLoading} />
            </ErrorBound>
            
            </>
        )
    }
}