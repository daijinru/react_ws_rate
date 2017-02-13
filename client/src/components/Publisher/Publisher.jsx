import React from 'react';
import style from './Publisher.css';

class Publisher extends React.Component{
	constructor(...args){
		super(...args);
        this.state = {
            content:''
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

	render(){
        const length = this.state.content.length;
        const disable = (this.state.content.length > 0 && this.state.content.length <= 140) ? '' : ' ' + style.disabled;
		return (
			<div className={style.publisher}>
                <div className={style.title}>
                    <div ref="hot">
                        <a href="#">Hello world!!</a>
                    </div>
                    <div className={style.tips} ref="tips">
                        <span>{length > 140 ? '已超出' : '还可以输入'}<strong>{length > 140 ? length - 140 : 140 - length}</strong>字</span>
                    </div>
                </div>            
                <div className={style.textElDiv} ref="textElDiv">
                    <textarea onFocus={this.handleFocus.bind(this)} onBlur={this.handleBlur.bind(this)} onChange={this.handleChange.bind(this)}></textarea>
                </div>
                <div className={style.btnWrap}>
                    <a className={style.publishBtn + disable} href="javascript:void(0)">发布</a>
                </div>
            </div>
		)
	}
}

export default Publisher;