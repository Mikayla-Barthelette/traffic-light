// Created by: Mikayla Barthelette
// Created on: Oct. 2020
// 
// This program is showing how a traffic light works
let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.clear()
strip.show()
basic.showIcon(IconNames.Yes)
basic.pause(500)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        strip.show()
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
        basic.pause(1000)
        strip.show()
        strip.clear()
        basic.pause(1000)
        strip.show()
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Orange))
        basic.pause(1000)
        strip.show()
        strip.clear()
        basic.pause(1000)
        strip.show()
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        basic.pause(1000)
        strip.show()
        strip.clear()
        basic.pause(1000)
    }
})
