import React from 'react';
import style from './Publisher.css';

class Publisher extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:this.props.data.name,
            content:'',
            ws:''
        }
    }
    // 获取焦点
    handleFocus(){
        this.refs.textElDiv.style.borderColor = '#fa7d3c';
        this.refs.hot.style.display = 'none';
        this.refs.tips.style.display = 'block';
    }
    // 失去焦点
    handleBlur(e){
        this.refs.textElDiv.style.borderColor = '#cccccc';
        this.refs.hot.style.display = 'block';
        this.refs.tips.style.display = 'none';
    }
    // 内容发生变化
    handleChange(e){
        this.setState({
            content:e.target.value
        })
    }
    // websocket初始化
    componentDidMount(){
        const ws = new WebSocket("ws://localhost:3001");
        ws.onopen = function(e){
            console.log('connection to server opened');
        }
        this.state.ws = ws;
    }
    // 点击发送信息
    handleWebsocket(){
        const length = this.state.content.length;
        if (length <= 0 || length > 140) {
            alert('字数不符合要求')
            return
        }

        const ws = this.state.ws;
        ws.send(this.state.content);
        this.refs.infor.value = "";

	    ws.onmessage = function(e){console.log(e.data)}
    }

	render(){
        const name = this.state.name;
        const length = this.state.content.length;
        const disable = (length > 0 && length <= 140) ? '' : ' ' + style.disabled;
		return (
			<div className={style.publisher}>
                <div className={style.title}>
                    <div ref="hot">
                        <a href="#">{name},Hello world!!</a>
                    </div>
                    <div className={style.tips} ref="tips">
                        <span>{length > 140 ? '已超出' : '还可以输入'}<strong>{length > 140 ? length - 140 : 140 - length}</strong>字</span>
                    </div>
                </div>            
                <div className={style.textElDiv} ref="textElDiv">
                    <textarea ref="infor" onFocus={this.handleFocus.bind(this)} onBlur={this.handleBlur.bind(this)} onChange={this.handleChange.bind(this)}></textarea>
                </div>
                <div className={style.btnWrap}>
                    <a className={style.publishBtn + disable} onClick={this.handleWebsocket.bind(this)} href="javascript:void(0)">发布</a>
                </div>
            </div>
		)
	}
}

export default Publisher;
