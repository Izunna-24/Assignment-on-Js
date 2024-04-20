class AirCondition {
    constructor() {
        this.isOn = false;
        this.temperature = 16;
    }

    getIsOn() {
        return this.isOn;
    }

    turnAcOnAndOff() {
        this.isOn = !this.isOn;
    }

    increaseTemperature() {
        if (this.isOn && this.temperature >= 16 && this.temperature < 30) {
            this.temperature++;
        }
    }

    getTemperature() {
        return this.temperature;
    }

    decreaseTemperature() {
        if (this.isOn && this.temperature > 16 && this.temperature <= 30) {
            this.temperature--;
        }
    }
}

//module.exports = (AirCondition)