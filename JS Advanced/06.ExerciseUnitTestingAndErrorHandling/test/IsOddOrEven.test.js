import {assert} from "chai";
import { isOddOrEven } from "../02.EvenOrOdd.js";

describe('main test group', function () {
    it('is not an object', () => {
        assert.equal(isOddOrEven({}), undefined);
    });
    it('is not an array', () => {
        assert.equal(isOddOrEven([]), undefined);
    });
    it('is not a function', () => {
        assert.equal(isOddOrEven(() => { }), undefined);
    });
    it('is not null', () => {
        assert.equal(isOddOrEven(null), undefined);
    });
    it('test woth valid string value', () => {
        assert.equal(isOddOrEven('str'),'odd');

        assert.equal(isOddOrEven('stri'),'even');

        assert.equal(isOddOrEven('s t r'),'odd');
    });

});