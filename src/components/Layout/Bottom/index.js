import React, { Component } from "react";


class Bottom extends Component {
    render(){
        const { children } = this.props;
        return (
            <div>
                {children}
            </div>
        );
    }

}

export default Bottom;