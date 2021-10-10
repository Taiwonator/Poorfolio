import next from "next"
import { SETTINGS } from "src/styles/settings"

let SECONDARY = SETTINGS.secondary
let TERTIARY = SETTINGS.tertiary

export interface ISnakePlatform {
    pos: IPos
    width: number, 
    height: number, 
    swipeDirection: number
}

export interface ISnake {
    body: ISnakeBlock[]
    color: string
    direction: number
    length: number
    platformWidth: number
    platformHeight: number
    size: number
}

export interface IBlock {
    color: string,
    pos: IPos,
    width: number, 
    height: number, 
}

export interface ISnakeBlock extends IBlock {
    nextPos: IPos,
}

export interface IPos {
    x: number, 
    y: number
}

export class SnakePlatform {
    pos: IPos
    width: number
    height: number

    constructor(obj) {
        this.pos = obj.pos
        this.width = obj.width
        this.height = obj.height
    }
}

export class Food {
    color: string
    pos: IPos
    width: number
    height: number

    constructor(obj) {
        this.color = obj.color
        this.pos = obj.pos
        this.width = obj.width
        this.height = obj.height
    }

    reposition () {
        this.pos = { x: 50, y: 50 }
    }
}

export class Snake {
    body: ISnakeBlock[]
    color: string
    direction: number
    length: number
    platformWidth: number
    platformHeight: number
    size: number
    snakeMoves: number

    constructor(obj) {
        this.color = obj.color
        this.length = obj.length
        this.platformWidth = obj.platformWidth
        this.platformHeight = obj.platformHeight
        this.size = obj.platformWidth * obj.size

        this.body = []
        this.direction = 3
        this.snakeMoves = 0

        this.init()
    }

    // Init Snake
    init () {
        // Create body
        for(var i = 0; i < this.length; i++) {
            let temp: ISnakeBlock
            temp = {
                color: this.color, 
                nextPos: { x: 0, y: 0 },
                pos: { x: 0, y: 0 },
                width: this.size, 
                height: this.size
            }
            this.body.push(temp)
        }
    }

    // Controls
    setDirection (direction) {
        this.direction = direction
    }

    // Move Snake
    setPos(i: number, pos: IPos) {
        this.body[i].pos = pos
    }

    setNextPos (i: number, nextPos: IPos) {
        this.body[i].nextPos = nextPos
    }

    setHeadNextPos (direction) {
        this.setDirection(direction)
        let head = this.body[0]

        switch(direction) {
            case 1:
                this.setNextPos(0, {
                    ...head.pos,
                    y: head.pos.y - this.size
                })
                break
            case 2:
                this.setNextPos(0, {
                    ...head.pos,
                    x: head.pos.x + this.size, 
                })
                break
            case 3:
                this.setNextPos(0, {
                    ...head.pos,
                    y: head.pos.y + this.size, 
                })
                break
            case 4:
                this.setNextPos(0, {
                    ...head.pos,
                    x: head.pos.x - this.size, 
                })
                break
            default:
                break
        }
    }

    moveToNextPos(i: number) {
        this.setPos(i, this.body[i].nextPos)
        if(i !== 0) {
            this.setNextPos(i, this.body[i-1].pos)
        }
    }

    moveSnake() {
        if(this.snakeMoves >= this.body.length) {
            for(var i = 0; i < this.body.length; i++) {
                this.moveToNextPos(i)
            }
        } else {
            for(var i = 0; i < (this.snakeMoves + 1); i++) {
                this.moveToNextPos(i)
                console.log(this.snakeMoves)
            }
            this.snakeMoves++
        }
    }

}