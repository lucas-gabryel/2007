enum RadioMessage {
    message1 = 49434,
    vd = 22935,
    ve = 5610,
    nd = 41836,
    ne = 21021
}
radio.onReceivedMessage(RadioMessage.ve, function () {
    // viu verde
    scor4 = 2
})
radio.onReceivedMessage(RadioMessage.vd, function () {
    // viu verde
    scor5 = 2
})
radio.onReceivedMessage(RadioMessage.ne, function () {
    // viu verde
    scor4 = 1
})
radio.onReceivedMessage(RadioMessage.nd, function () {
    // viu verde
    scor5 = 1
})
let sensor3 = 0
let sensor2 = 0
let sensor1 = 0
let scor5 = 0
let scor4 = 0
dataStreamer.writeNumber(9600)
radio.setGroup(5)
basic.forever(function () {
    dataStreamer.writeNumberArray([pins.analogReadPin(AnalogPin.P0), pins.analogReadPin(AnalogPin.P3), pins.analogReadPin(AnalogPin.P10)])
    dataStreamer.writeLine()
    basic.pause(100)
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P10) <= 600) {
        // preto
        sensor1 = 0
    } else {
        // branco
        sensor1 = 1
    }
    if (pins.analogReadPin(AnalogPin.P0) <= 600) {
        sensor2 = 0
    } else {
        sensor2 = 1
    }
    if (pins.analogReadPin(AnalogPin.P3) <= 600) {
        sensor3 = 0
    } else {
        sensor3 = 1
    }
})
basic.forever(function () {
    if (scor4 == 2 && scor5 == 2) {
        for (let index = 0; index < 1; index++) {
            servos.P1.run(40)
            servos.P2.run(-40)
            basic.pause(550)
            servos.P1.stop()
            servos.P2.stop()
            basic.pause(2000)
            servos.P1.run(40)
            servos.P2.run(40)
            basic.pause(6800)
            servos.P1.stop()
            servos.P2.stop()
            basic.pause(2000)
        }
    } else if (scor5 == 2) {
        for (let index = 0; index < 1; index++) {
            servos.P1.run(40)
            servos.P2.run(-40)
            basic.pause(550)
            servos.P1.stop()
            servos.P2.stop()
            basic.pause(2000)
            servos.P1.run(-40)
            servos.P2.run(-40)
            basic.pause(3600)
            servos.P1.stop()
            servos.P2.stop()
            basic.pause(2000)
        }
    } else if (scor4 == 2) {
        for (let index = 0; index < 1; index++) {
            servos.P1.run(40)
            servos.P2.run(-40)
            basic.pause(550)
            servos.P1.stop()
            servos.P2.stop()
            basic.pause(2000)
            servos.P1.run(40)
            servos.P2.run(40)
            basic.pause(3600)
            while (sensor1 == 1 && (sensor2 == 1 && sensor3 == 1)) {
                servos.P1.run(40)
                servos.P2.run(40)
                basic.pause(100)
            }
            if (scor4 == 2) {
                servos.P1.run(40)
                servos.P2.run(40)
                basic.pause(1000)
            }
        }
    } else {
        if (sensor1 == 0 && (sensor2 == 0 && sensor3 == 0)) {
            servos.P1.run(-20)
            servos.P2.run(20)
        }
        if (sensor1 == 1 && (sensor2 == 1 && sensor3 == 1)) {
            servos.P1.run(-50)
            servos.P2.run(50)
        }
        if (sensor1 == 1 && (sensor2 == 0 && sensor3 == 1)) {
            servos.P1.run(-50)
            servos.P2.run(50)
        }
        // ESQUERDA
        if (sensor1 == 0 && (sensor2 == 0 && sensor3 == 1)) {
            servos.P1.run(-40)
            servos.P2.run(-40)
        }
        // ESQUERDA
        if (sensor1 == 0 && (sensor2 == 1 && sensor3 == 1)) {
            servos.P1.run(-40)
            servos.P2.run(-40)
        }
        if (sensor1 == 1 && (sensor2 == 0 && sensor3 == 0)) {
            servos.P1.run(40)
            servos.P2.run(40)
        }
        if (sensor1 == 1 && (sensor2 == 1 && sensor3 == 0)) {
            servos.P1.run(40)
            servos.P2.run(40)
        }
    }
})
basic.forever(function () {
	
})
