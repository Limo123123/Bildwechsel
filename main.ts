let Knopf = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        Knopf += -1
    } else if (input.buttonIsPressed(Button.B)) {
        Knopf += 1
    }
})
basic.forever(function () {
    if (Knopf == 1) {
        basic.clearScreen()
        basic.showIcon(IconNames.Heart)
    } else if (Knopf == 2) {
        basic.clearScreen()
        basic.showIcon(IconNames.SmallHeart)
    } else if (Knopf == 3) {
        basic.clearScreen()
        basic.showIcon(IconNames.Yes)
    } else if (Knopf == 4) {
        basic.clearScreen()
        basic.showIcon(IconNames.No)
    } else if (Knopf == 5) {
        basic.clearScreen()
        basic.showIcon(IconNames.Happy)
    } else if (Knopf == 6) {
        basic.clearScreen()
        basic.showIcon(IconNames.Sad)
    } else if (Knopf == 7) {
        basic.clearScreen()
        basic.showIcon(IconNames.Confused)
    } else if (Knopf == 8) {
        basic.clearScreen()
        basic.showIcon(IconNames.Angry)
    } else if (Knopf == 9) {
        basic.clearScreen()
        basic.showIcon(IconNames.Asleep)
    } else if (Knopf == 10) {
        basic.clearScreen()
        basic.showIcon(IconNames.Surprised)
    } else if (Knopf == 11) {
        basic.clearScreen()
        basic.showIcon(IconNames.Silly)
    } else if (Knopf == 12) {
        basic.clearScreen()
        basic.showIcon(IconNames.Fabulous)
    } else if (Knopf == 13) {
        basic.clearScreen()
        basic.showIcon(IconNames.Meh)
    } else if (Knopf == 14) {
        basic.clearScreen()
        basic.showIcon(IconNames.TShirt)
    } else if (Knopf == 15) {
        basic.clearScreen()
        basic.showIcon(IconNames.Rollerskate)
    } else if (Knopf == 16) {
        basic.clearScreen()
        basic.showIcon(IconNames.Duck)
    } else if (Knopf == 17) {
        basic.clearScreen()
        basic.showIcon(IconNames.House)
    } else if (Knopf == 18) {
        basic.clearScreen()
        basic.showIcon(IconNames.Tortoise)
    } else if (Knopf == 19) {
        basic.clearScreen()
        basic.showIcon(IconNames.Butterfly)
    } else if (Knopf == 20) {
        basic.clearScreen()
        basic.showIcon(IconNames.StickFigure)
    } else if (Knopf == 21) {
        basic.clearScreen()
        basic.showIcon(IconNames.Ghost)
    } else if (Knopf == 22) {
        basic.clearScreen()
        basic.showIcon(IconNames.Sword)
    } else if (Knopf == 23) {
        basic.clearScreen()
        basic.showIcon(IconNames.Giraffe)
    } else if (Knopf == 24) {
        basic.clearScreen()
        basic.showIcon(IconNames.Skull)
    } else if (Knopf == 25) {
        basic.clearScreen()
        basic.showIcon(IconNames.Umbrella)
    } else if (Knopf == 26) {
        basic.clearScreen()
        basic.showIcon(IconNames.Snake)
    } else if (Knopf == 27) {
        basic.clearScreen()
        basic.showIcon(IconNames.Rabbit)
    } else if (Knopf == 28) {
        basic.clearScreen()
        basic.showIcon(IconNames.Cow)
    } else if (Knopf == 29) {
        basic.clearScreen()
        basic.showIcon(IconNames.QuarterNote)
    } else if (Knopf == 30) {
        basic.clearScreen()
        basic.showIcon(IconNames.EigthNote)
    } else if (Knopf == 31) {
        basic.clearScreen()
        basic.showIcon(IconNames.Pitchfork)
    } else if (Knopf == 32) {
        basic.clearScreen()
        basic.showIcon(IconNames.Target)
    } else if (Knopf == 33) {
        basic.clearScreen()
        basic.showIcon(IconNames.Triangle)
    } else if (Knopf == 34) {
        basic.clearScreen()
        basic.showIcon(IconNames.LeftTriangle)
    } else if (Knopf == 35) {
        basic.clearScreen()
        basic.showIcon(IconNames.Chessboard)
    } else if (Knopf == 36) {
        basic.clearScreen()
        basic.showIcon(IconNames.Diamond)
    } else if (Knopf == 37) {
        basic.clearScreen()
        basic.showIcon(IconNames.SmallDiamond)
    } else if (Knopf == 38) {
        basic.clearScreen()
        basic.showIcon(IconNames.Square)
    } else if (Knopf == 39) {
        basic.clearScreen()
        basic.showIcon(IconNames.SmallSquare)
    } else if (Knopf == 40) {
        basic.clearScreen()
        basic.showIcon(IconNames.Scissors)
    } else if (Knopf == 41) {
        Knopf = 40
    } else {
        basic.clearScreen()
    }
})
