import React, { Component } from "react";
import PropTypes from "prop-types";

class XiaojiejieItem extends Component {
    handleClick() {
        this.props.deleteItem(this.props.index);
    }
    render() {
        return (
            <li
                key={this.props.index}
                onClick={this.handleClick.bind(this)}
                // dangerouslySetInnerHTML={{ __html: this.props.item }}
            >
                {this.props.avname} 为你做：{this.props.content}
            </li>
        );
    }
}

XiaojiejieItem.propTypes = {
    avname: PropTypes.string.isRequired,
    content: PropTypes.string,
    index: PropTypes.number,
    deleteItem: PropTypes.func,
};
XiaojiejieItem.defaultProps = {
    avname: "jspang",
};

export default XiaojiejieItem;
