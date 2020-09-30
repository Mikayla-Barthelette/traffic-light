let range: neopixel.Strip = null
let strip = neopixel.create(DigitalPin.P16, 24, NeoPixelMode.RGB)
basic.forever(function () {
    range = strip.range(2, 4)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(1000)
    range = strip.range(1, 4)
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(1000)
    range = strip.range(0, 4)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(1000)
})
