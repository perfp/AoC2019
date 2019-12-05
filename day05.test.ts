import { Day05 } from './day05';
import { assert } from 'chai';
import {IntComputer} from './IntComputer';
import { Day04 } from './day04';

const day05 = new Day05();

describe.only("Day05", () => {

    it("can parse instruction", () => {
        const intComputer = new IntComputer();
        let digits = intComputer.getDigitsArray(123);
        assert.deepEqual(digits, [1,2,3]);
    });

    it("can get simple operation", () => {
        const intComputer = new IntComputer();
        let operation = intComputer.getOperation(1);
        assert.equal(1, operation.operator);
        assert.equal(0, operation.parameter1mode);
        assert.equal(0, operation.parameter2mode);
        assert.equal(0, operation.parameter3mode);
    });
    
    it("can get complex operation", () => {
        const intComputer = new IntComputer();
        let operation = intComputer.getOperation(1002);
        assert.equal(2, operation.operator);
        assert.equal(0, operation.parameter1mode);
        assert.equal(1, operation.parameter2mode);
        assert.equal(0, operation.parameter3mode);
    });

    it("can handle immediate mode", () =>{
        let input = [1002,4,3,4,33];
        const result = day05.calculateNext(input);
        assert.deepEqual(result.output, [1002,4,3,4,99]);
    });

    it("can calculate add", () => {
        let input = [1,0,0,0];
        const result = day05.calculateNext(input);
        assert.deepEqual(result.output, [2,0,0,0]);
    
    });
    
    it("can handle HCF", () => {
        let input = [99,0,0,0];
        const output = day05.calculateNext(input);
        assert.deepEqual(output.done, true);
    
    });
    
    it("can handle multiply", () => {
        let input = [2,0,3,3];
        const result = day05.calculateNext(input);
        assert.deepEqual(result.output, [2,0,3,6]);
    
    });
    
    it("can expand result array", () => {
        const input = [2,4,4,5,99];
        const result = day05.calculateNext(input);
        assert.deepEqual(result.output, [2,4,4,5,99,9801]);
    });
    
    it("can iterate input", () => {
        let input = [1,1,1,4,99,5,6,0,99];
        const result = day05.iterateProgram(input);
        assert.deepEqual(result, [30,1,1,4,2,5,6,0,99]);
    
    });

    it("can parse negative arguments", () => {
        const input = [1101,100,-1,4,0];
        const result = day05.calculateNext(input);
        assert.deepEqual(result.output, [1101,100,-1,4,99]);

    })

    it("can handle jump-if-true position", () => {
        const input = [1005,3,99,1];
        const result = day05.calculateNext(input);
        assert.equal(result.setIP, 99);
    });

    it("can handle jump-if-true immediate", () => {
        const input = [105,1,3,99];
        const result = day05.calculateNext(input);
        assert.equal(99, result.setIP);
    });

    it("can handle jump-if-false immediate", () => {
        const input = [1106,0,99];
        const result = day05.calculateNext(input);
        assert.equal(99, result.setIP);
    });
    
    it("can handle jump-if-false position", () => {
        const input = [1006,0,99];
        const result = day05.calculateNext(input);
        assert.equal(result.setIP, -1);
    });

    it("can handle jump-if-false position positive", () => {
        const input = [1006,3,99,0];
        const result = day05.calculateNext(input);
        assert.equal(result.setIP, 99);
    });

    it("can handle less than immediate", () => {
        const input = [11107,1,3,0];
        const result = day05.calculateNext(input);
        assert.deepEqual(result.output, [1,1,3,0]);
    });

    it("can handle less than position", () => {
        const input = [7,1,2,3];
        const result = day05.calculateNext(input);
        
        assert.deepEqual(result.output, [7,1,2,1]);
    });

    it("can handle equals immediate", () => {
        const input = [11108,3,3,0];
        const result = day05.calculateNext(input);
        assert.deepEqual(result.output, [1,3,3,0]);
    });

    it("can handle equals position", () => {
        const input = [8,3,3,3];
        const result = day05.calculateNext(input);
        
        assert.deepEqual(result.output, [8,3,3,1]);
    });

    it("can compare input to 8", () => {
        const input = [3,9,8,9,10,9,4,9,99,-1,8];
        day05.iterateProgram(input, 8);

    });

    it("can compare input lt 8", () => {
        const input = [3,9,7,9,10,9,4,9,99,-1,8];
        day05.iterateProgram(input, 7);

    });
    it("can compare input eq 8 immediate", () => {
        const input = [3,3,1108,-1,8,3,4,3,99];
        day05.iterateProgram(input, 8);

    });
    it("can compare input lt 8 immediate", () => {
        const input = [3,3,1107,-1,8,3,4,3,99];
        day05.iterateProgram(input, 8);

    });

    
    it("can compare input lt 8 immediate", () => {
        const input = [3,3,1107,-1,8,3,4,3,99];
        day05.iterateProgram(input, 8);

    });

    it("can run big test", () => {
        const input = [3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,
            1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,
            999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99];
        day05.iterateProgram(input, 7);

    });


    
    
});