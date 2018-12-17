import React, { Component } from 'react';

export default class CardText extends Component {
    render(){
        return(
            <fieldset>
                <textarea
                name={this.props.name}
                id={this.props.id}
                placeholder={this.props.placeholder}
                required
                />
            </fieldset>
            
        )
    }
}