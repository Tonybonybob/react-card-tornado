import React, { Component } from 'react';

export default class CardFront extends Component {
    render(){
        return(
            <div className='card-side side-front'>
                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-xs-6">
                            <img src='https://cdn.pixabay.com/photo/2014/10/29/21/46/railway-508568_1280.jpg'></img>
                        </div>
                        <div className='col-xs-6 side-front-content'>
                            <h2>Tony</h2>
                            <p>
                            Culpa corrupti saepe maiores deserunt autem esse quis explicabo cum facilis vel ea dicta hic sint eum magni blanditiis assumenda nemo, perspiciatis, neque commodi rem. Debitis itaque nulla quas repellendus?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}