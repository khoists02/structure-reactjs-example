import React, { Component } from "react";

class ContentBody extends Component {
    render(){
        const { children } = this.props;
        return (
            <div>
                {children}
            </div>
        );
    }

}

export default ContentBody;