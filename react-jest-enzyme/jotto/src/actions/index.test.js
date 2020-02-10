import {correctGuess, actionTypes} from './index';

describe('correct guess', () => {
    test('returns an object with type CORRECT_GUESS', () => {
        const action = correctGuess();
        expect(action).toEqual({type: actionTypes.CORRECT_GUESS})
    })
});