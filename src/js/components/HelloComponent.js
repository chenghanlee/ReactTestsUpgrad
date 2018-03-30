import React, { Component } from 'react';

import '../../css/tachyons.min.css';

export default class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonClicked: false,
        };
    }

    handleOnClick = e => {
        e.preventDefault();

        const buttonClickedState = this.state.buttonClicked;
        this.setState({ buttonClicked: !buttonClickedState });
    };

    render() {
        const buttonColor = this.state.buttonClicked ? 'bg-red' : 'bg-dark-blue';
        const buttonClassNames = `link tc ph3 pv2 db bg-animate ${buttonColor} white f6 b br1`;

        return (
            <div className="w-100 sans-serif">
                <section className="tc pa3 pa5-ns">
                    <article className="hide-child relative ba b--black-20 mw5 center">
                        <img src="https://i.imgur.com/VZgxXSz.jpg" className="db" alt="Photo of the Terminator" />
                        <div className="pt2 bt b--black-20">
                            <a className="f6 db link dark-blue hover-blue" href="#">
                                Arnold S.
                            </a>
                            <p className="f6 gray mv1 pb3">1 mutual friend</p>
                            <a id="js-button" className={buttonClassNames} href="#" onClick={this.handleOnClick}>
                                Add Friend
                            </a>
                        </div>
                    </article>
                </section>
            </div>
        );
    }
}
