import React from 'react';
import {shallow} from 'enzyme';

/**
 * Factory function to create a shallow wrapper for App component
 * @function setup
 * @param {ReactComponent} Component - React component to render with shallow
 * @param {Object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
export const factory = (Component, props = {}) => {
    const wrapper = shallow(<Component {...props} />);

    return wrapper;
};

/**
 * Return ShallowWrapper containg node(s) with the data-test value
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {string} value - data attribute value to find
 * @returns {ShallowWrapper}
 */
export const findComponent = (wrapper, value) => wrapper.find(`[data-test="${value}"]`);
