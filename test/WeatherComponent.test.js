import React from 'react';
import fetchMock from 'fetch-mock';
import Enzyme, { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import WeatherComponent from '../src/js/components/WeatherComponent';

Enzyme.configure({ adapter: new Adapter() });

fetchMock.get(`*`, JSON.stringify({ city: `Dallas`, temp: '90' }));

test(`Component mounts correctly while using async await`, async () => {
    const weather = shallow(
        <WeatherComponent url="https://api.darksky.net/forecast/0d2687a225ecee064c93466b5738f1fb/37.8267,-122.4233" />
    );

    // mounting the component
    await weather.instance().componentDidMount();

    // checks to see if the state is mounted correctly during componentDidMount
    expect(weather.state()).toHaveProperty('city', 'Dallas');
    expect(weather.state()).toHaveProperty('temperature', '90');
});

test('Component renders correctly', () => {
    const weather = shallow(<WeatherComponent />);
    expect(shallowToJson(weather)).toMatchSnapshot();
});
