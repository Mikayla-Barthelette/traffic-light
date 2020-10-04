# Created by: Mikayla Barthelette
# Created on: Oct. 2020
# 
# This program
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.clear()
strip.show()
basic.show_icon(IconNames.YES)
basic.pause(500)

def on_forever():
    for index in range(4):
        strip.show()
        strip.set_pixel_color(2, neopixel.colors(NeoPixelColors.GREEN))
        basic.pause(1000)
        strip.show()
        strip.clear()
        basic.pause(1000)
        strip.show()
        strip.set_pixel_color(1, neopixel.colors(NeoPixelColors.ORANGE))
        basic.pause(1000)
        strip.show()
        strip.clear()
        basic.pause(1000)
        strip.show()
        strip.set_pixel_color(0, neopixel.colors(NeoPixelColors.RED))
        basic.pause(1000)
        strip.show()
        strip.clear()
        basic.pause(1000)
basic.forever(on_forever)
