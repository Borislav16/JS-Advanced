import {assert} from "chai";
import { lookupChar } from "../03.CharLookup.js";

describe('main', () => {
    it('return single string', () => {
        assert(lookupChar('Love', 1), 'o');
    });
    it('index, greater than max length', () => {
        assert(lookupChar('Love', 10), undefined);
    });
    it('index, lower than 0', () => {
        assert(lookupChar('Love', -2), undefined);
    });
    it('single char', () => {
        assert(lookupChar('L', 0), 'L');
    });
    it('empty string', () => {
        assert(lookupChar('', 0), 'Incorrect Index');
    });
    it('not a string', () => {
        assert(lookupChar([], 0) === undefined);
    });
    it('not a number', () => {
        assert(lookupChar('Love', 10), 'Incorrect Index');
    });
    it('not a number', () => {
        assert(lookupChar('L', 'sr') === undefined);
    });
    it('both invalid', () => {
        assert(lookupChar(0, 0) === undefined);
    });
    it('both invalid', () => {
        assert(lookupChar(190, 10) === undefined);
    });
    it('both invalid', () => {
        assert(lookupChar('Love', 10.5) === undefined);
    });
    it('valid index', () => {
        assert(lookupChar('Love', 2), 'v');
    });
    it('empty string', () => {
        assert(lookupChar('', 1), undefined);
    });
    it('empty string', () => {
        assert(lookupChar('', -10), 'Incorrect Index');
    });
    it('empty string', () => {
        assert(lookupChar('Love', -10), 'Incorrect Index');
    });
});