import React, { Component } from 'react';
import 'babel-polyfill';

import '../../css/tachyons.min.css';

const fetchJsonResponse = async url => {
    try {
        const response = await fetch(url);
        const responseJson = await response.json();
        return responseJson;
    } catch (e) {
        console.log('fetch url failed');
    }
};

export default class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            temperature: '',
        };
    }

    componentDidMount() {
        const weatherUrl = this.props.url;

        return fetchJsonResponse(weatherUrl).then(resp => {
            const city = resp.city;
            const temperature = resp.temp;

            this.setState({
                city: city,
                temperature: temperature,
            });
        });
    }

    render() {
        const background = 'http://mrmrs.github.io/photos/display.jpg';
        return (
            <article className="helvetica pb5">
                <header className="vh-100 bg-light-pink dt w-100">
                    <div
                        style={{ backgroundImage: `url(${background}) no-repeat center right background-size: cover` }}
                        className="dtc v-mid cover ph3 ph4-m ph5-l"
                    >
                        <h1 className="f2 f-subheadline-l measure lh-title fw9">
                            Weather at {this.state.city} is current {this.state.temperature}
                        </h1>
                        <h2 className="f6 fw6 black">A simple weather component</h2>
                    </div>
                </header>
            </article>
        );
    }
}
