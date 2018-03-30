import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import HelloComponent from '../src/js/components/HelloComponent';

Enzyme.configure({ adapter: new Adapter() });

test('Hello Component Renders Correctly', () => {
    const hello = shallow(<HelloComponent />);

    // tests that the render HTML contains a text called "Add Friend"
    expect(hello.text()).toContain('Add Friend');
});

test('Test That The Component Renders Correctly Using Snapshots', () => {
    // Snapshot testing explanined:
    // https://medium.com/@luisvieira_gmr/snapshot-testing-react-components-with-jest-3455d73932a4
    const hello = shallow(<HelloComponent />);
    expect(shallowToJson(hello)).toMatchSnapshot();
});

test('Component Handles onClick Correctly', () => {
    const buttonId = '#js-button';
    const hello = shallow(<HelloComponent />);
    const mockedEvent = { preventDefault: () => {} };

    hello.find(buttonId).simulate('click', mockedEvent);
    expect(hello.find(buttonId).hasClass('bg-red')).toEqual(true);
});

test('Component Initialize Its State Correctly', () => {
    const buttonId = '#js-button';
    const hello = shallow(<HelloComponent />);
    const mockedEvent = { preventDefault: () => {} };

    // buttonState is not clicked. Therefore, it is false
    expect(hello.state().buttonClicked).toEqual(false);
});

test('Component Handles State Changes Correctly', () => {
    const buttonId = '#js-button';
    const hello = shallow(<HelloComponent />);
    const mockedEvent = { preventDefault: () => {} };

    // Simulate clicking the button
    hello.find(buttonId).simulate('click', mockedEvent);
    // buttonClicked state should now be true
    expect(hello.state().buttonClicked).toEqual(true);

    // Simulate clicking the button once again to undo the previous click
    hello.find(buttonId).simulate('click', mockedEvent);
    // buttonClicked state should now be false
    expect(hello.state().buttonClicked).toEqual(false);
});
