input.onButtonPressed(Button.A, function () {
    basic.showNumber(Math.abs(Math.round(input.magneticForce(Dimension.Strength) - Start_Value)))
    basic.pause(500)
    if (Math.abs(Math.round(input.magneticForce(Dimension.Strength) - Start_Value)) <= 2) {
        music.playTone(262, music.beat(BeatFraction.Double))
    } else {
        music.playTone(523, music.beat(BeatFraction.Quarter))
        basic.pause(100)
        music.playTone(523, music.beat(BeatFraction.Quarter))
    }
    basic.showString("-")
})
let Start_Value = 0
Start_Value = input.magneticForce(Dimension.Strength)
basic.showString("-")
