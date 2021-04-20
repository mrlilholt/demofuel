controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 4 . . . . . . . 
        . . . . . . . 4 1 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 0, -50)
    mySprite.startEffect(effects.trail)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    theEnemy.destroy(effects.fire, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
let theEnemy: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . 3 3 3 . . . . . . . 
    . . . . . 3 3 4 3 3 . . . . . . 
    . . . . . . 5 4 5 . . . . . . . 
    . . . . . . . 4 . . . . . . . . 
    . . . . . . . 5 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
game.onUpdateInterval(1000, function () {
    theEnemy = sprites.createProjectileFromSide(img`
        . . . b b b b b b b b b . . . . 
        . . b 1 d d d d d d d 1 b . . . 
        . b 1 1 1 1 1 1 1 1 1 1 1 b . . 
        . b d b c c c c c c c b d b . . 
        . b d c 6 6 6 6 6 6 6 c d b . . 
        . b d c 6 d 6 6 6 6 6 c d b . . 
        . b d c 6 6 6 6 6 6 6 c d b . . 
        . b d c 6 6 6 6 6 6 6 c d b . . 
        . b d c 6 6 6 6 6 6 6 c d b . . 
        . b d c c c c c c c c c d b . . 
        . c b b b b b b b b b b b c . . 
        c b c c c c c c c c c c c b c . 
        c 1 d d d d d d d d d d d 1 c . 
        c 1 d 1 1 d 1 1 d 1 1 d 1 1 c . 
        c b b b b b b b b b b b b b c . 
        c c c c c c c c c c c c c c c . 
        `, 50, 50)
    theEnemy.x = randint(5, 155)
    theEnemy.setKind(SpriteKind.Enemy)
})
