let Photocell_Sensor = 0
basic.forever(function () {
    Photocell_Sensor = pins.digitalReadPin(DigitalPin.P0)
    basic.showNumber(Photocell_Sensor)
    if (Photocell_Sensor > 0) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . . # .
            . . # # .
            . . # # .
            . # # # .
            # # # . .
            `)
    }
})
