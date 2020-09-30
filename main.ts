let range3: neopixel.Strip = null
let range2: neopixel.Strip = null
let range: neopixel.Strip = null
let strip = neopixel.create(DigitalPin.P16, 1, NeoPixelMode.RGB)
basic.forever(function () {
    basic.pause(1000)
    range = strip.range(2, 1)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(1000)
    strip.clear()
    basic.pause(1000)
    range2 = strip.range(1, 1)
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(1000)
    range3 = strip.range(0, 1)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(1000)
    basic.pause(1000)
})
