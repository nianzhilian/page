/**
 * 1、current 当前页
 * 2、limit 每页显示多少条
 * 3、total 总共多少条数据 用来计算分页
 * 4、panelPage 要显示页码的总数量
 */

export function Pager(props){
    //获取总共多少页
    const pageNumber = getPageNumber(props);
    if(pageNumber === 0){
        return null;
    }
    //生成页码
    //获取最小页码
    const min = getMin(props);
    //获取最大页码
    const max = getMax(props,pageNumber,min);
    const arr = [];
    for(let i = min;i<=max;i++){
        arr.push(<span key={i} className={props.current === i?'item active':'item'} onClick={()=>{toTarget(i,props)}}>{i}</span>)
    }
    return (
        <>
        <span onClick={()=>{toTarget(1,props)}} className={props.current === 1?'item disabled':'item'}>首页</span>
        <span onClick={()=>{toTarget(props.current-1<1?1:props.current-1,props)}} className={props.current === 1?'item disabled':'item'}>上一页</span>
        {arr}
        <span onClick={()=>{toTarget(props.current+1>pageNumber?pageNumber:props.current+1,props)}} className={props.current === pageNumber?'item disabled':'item'}>下一页</span>
        <span onClick={()=>{toTarget(pageNumber,props)}} className={props.current === pageNumber?'item disabled':'item'}>尾页</span>
        <span>{props.current}</span>
        /
        <span>{pageNumber}</span>
        </>
    )
}

function getPageNumber(props){
    return Math.ceil(props.total / props.limit);
}

function toTarget(targe,props){
    //如果是点击的当前页 则不用在调用页面跳转
    if(targe === props.current){
        return;
    }
    props.onChangePage && props.onChangePage(targe);
}

function getMin(props){
    let min = props.current - Math.floor(props.panelPage / 2);
    if(min<1){
        min = 1;
    }
    return min;
}

function getMax(props,pageNumber,min){
    let max = min + props.panelPage - 1;
    if(max>pageNumber){
        max = pageNumber;
    }
    return max;
}