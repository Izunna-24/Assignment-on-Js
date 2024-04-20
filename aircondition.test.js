//import {Aircondition} from './aircondition.js';
let Aircondition = require("./aircondition.js")

describe('Aircondition',()=>{
    let thermocool;
    })

beforeEach(()=>{
    thermocool = new Aircondition;
})



test("Ac can turn_on and off",() =>{
    thermocool.turnAcOnAndOff();
    expect(thermocool.getIsOn()).toBe(true);
    thermocool.turnAcOnAndOff();
    expect(thermocool.getIsOn()).toBe(false);

});

test('temperature can increase by 1 from 16', () => {
    thermocool.turnAcOnAndOff();
    thermocool.increaseTemperature();
    expect(thermocool.getTemperature()).toBe(17)

});

test('minimum default temperature is 16',()=>{
    thermocool.turnAcOnAndOff();
    expect(thermocool.getTemperature()).toBe(16);
});

test('maximum default temperature is 30',()=>{
    thermocool.turnAcOnAndOff();
    for(let index = 0;index < 14; index++){
        thermocool.increaseTemperature();
    }
    expect(thermocool.getTemperature()).toBe(30);
});

test('aircondition  temperature can not increase beyond 30',()=>{
    thermocool.turnAcOnAndOff();
    for(let index = 0;index < 120; index++){
        thermocool.increaseTemperature();
    }
    expect(thermocool.getTemperature()).toBe(30);
});

test('aircondition  temperature can decrease',()=>{
    thermocool.turnAcOnAndOff();
    thermocool.increaseTemperature()
    expect(thermocool.getTemperature()).toBe(17);
    thermocool.decreaseTemperature();
    expect(thermocool.getTemperature()).toBe(16);
});

test('aircondition  temperature can not decrease below 16',()=>{
    thermocool.turnAcOnAndOff();
    thermocool.decreaseTemperature();
    expect(thermocool.getTemperature()).toBe(16);
});






