import React, { Component } from "react";
import XiaojiejieItem from "./XiaojiejieItem";

class Xiaojiejie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            list: ["护唇膏用", "精油推背"],
        };
    }
    inputChange() {
        this.setState({
            inputValue: this.input.value,
        });
    }
    // inputChange(e) {
    //     this.setState({
    //         inputValue: e.target.value,
    //     });
    // }
    addListItem() {
        this.setState(
            {
                list: [...this.state.list, this.state.inputValue], // 扩展运算符
                inputValue: "",
            },
            () => {
                console.log(this.ul.querySelectorAll("li").length);
            }
        );
    }
    deleteItem(index) {
        let localList = this.state.list;
        localList.splice(index, 1);
        this.setState({
            list: localList,
        });
    }
    render() {
        return (
            <>
                <div>
                    <label htmlFor="userInput">增加服务：</label>
                    <input
                        id="userInput"
                        value={this.state.inputValue}
                        onChange={this.inputChange.bind(this)}
                        ref={(input) => {
                            this.input = input;
                        }}
                    />
                    <button onClick={this.addListItem.bind(this)}>
                        增加服务
                    </button>
                </div>
                <ul
                    ref={(ul) => {
                        this.ul = ul;
                    }}
                >
                    {this.state.list.map((item, index) => {
                        return (
                            <XiaojiejieItem
                                content={item}
                                key={index + item}
                                index={index}
                                deleteItem={this.deleteItem.bind(this)} //把方法传递给子组件
                            />
                        );
                    })}
                </ul>
            </>
        );
    }
}

export default Xiaojiejie;
