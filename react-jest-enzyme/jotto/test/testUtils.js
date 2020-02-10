import checkPropTypes from 'check-prop-types';
import Congrats from "../src/Congrats";

/**
 * Return ShallowWrapper comtaining node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
};

/**
 * Return Boolean value indicating if the prop types are matching or not.
 * @param {Object} component - React component for which the propTypes should be validated.
 * @param {Object} confirmingProps - Object containing props which should be validated.
 * @returns {Boolean}
 */
export const checkProps = (component, confirmingProps) => {
    const propError = checkPropTypes(component.propTypes, confirmingProps, 'prop', component.name);
    expect(propError).toBeUndefined();
};