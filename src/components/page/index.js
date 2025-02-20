/**
 * @param current 当前页
 * @param limit:每页显示多少条默认10条
 * @param panelPage 显示页码数的总数量
 * @param total 总条数 就算总共多少页
 * @param onChangePage 页码改变的回调函数
 */
//导入模块 只运行一次模块不做任何的导入
import './index.css'
export function Pager({current = 1,panelPage = 10,...props}){
    //计算总页数
    const pages = getPages(props);
    const min = getMinPage(current,panelPage);
    const max = getMaxPage(min,panelPage,pages);
    var arr = [];
    for(let i = min;i<=max;i++){
        arr.push(<span key={i} onClick={()=>toPage(i,props,current)} className={current === i?"active":''}>{i}</span>)
    }
    return (
        <div className='page'>
            <span className={current == 1?'disabled':''} onClick={()=>toPage(1,props,current)}>首页</span>
            <span className={current == 1?'disabled':''} onClick={()=>toPage(current-1<1?1:current-1,props,current)}>上一页</span>
            {arr}
            <span className={current == pages?'disabled':''} onClick={()=>toPage(current+1>pages?pages:current+1,props,current)}>下一页</span>
            <span className={current == pages?'disabled':''} onClick={()=>toPage(pages,props,current)}>尾页</span>
            <em>{current}/{pages}</em>
        </div>
    )
}

function getMinPage(current,panelPage){
    let min = current -  Math.floor(panelPage/2);
    if(min<1){
        min = 1;
    }
    return min;
}

function getMaxPage(min,panelPage,pages){
    let max = min + panelPage -1;
    if(max>pages){
        max = pages
    }
    return max
}

function getPages({movieTotal,limit = 50}){
    return Math.ceil(movieTotal / limit)
}

function toPage(target,props,current){
    if(target == current){
        return;
    }
    props.onPage && props.onPage(target)
}