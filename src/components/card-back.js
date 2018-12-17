import React, { Component } from 'react';
import CardButton from './card-button';
import CardLinks from './card-links';
import CardText from './card-text';
import CardInput from './card-input';

export default class CardBack extends Component {
    render(){
        return(
            <div className="card-side side-back">
                <div className='container-fluid'>
                    <h1>Tell me about yourself</h1>
                    <form formAction="#" className="card-form">
                        <div className="row">
                            <div className="col-xs-6">
                                <CardInput name="firstName" id="firstName" type="text"
                                placeholder={'Your first name'}/>
                            </div>
                            <div className="col-xs-6">
                                <CardInput name="lastName" id="lastName" type="text"
                                placeholder={'Your last name'}/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-6">
                                <CardInput name="email" id="email" type="email"
                                placeholder={'Your email'}/>
                            </div>
                            <div className="col-xs-6">
                                <CardInput name="subject" id="subject" type="text"
                                placeholder={'Your subject'}/>
                            </div>
                        </div>
                        <CardText name="message" id="message" placeholder={'Your message'}/>
                        <CardButton className="btn btn-primary" type="submit" value="Send message" />
                    </form> 

                    <CardLinks/>
                </div>
            </div>
            
        )
    }
}