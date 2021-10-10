import React, { useState, useEffect, useRef } from 'react'
import { SETTINGS } from 'src/styles/settings'
import useKeypress from 'src/hooks/useKeypress'
import useAnimationFrame from 'src/hooks/useAnimationFrame'
import { Food, Snake, ISnake, ISnakePlatform, IBlock, ISnakeBlock, IPos } from './lib/snake'

export const SnakePlatform: React.FC<ISnakePlatform> = ({ pos, width, height, swipeDirection }) => {
    
    let size = 1 / 10
    let SECONDARY = SETTINGS.secondary
    let TERTIARY = SETTINGS.tertiary

    const [isSwipe, setIsSwipe] = useState(true)

    const [food, setFood] = useState(new Food({
        color: SECONDARY, 
        pos: { x: 0, y: 0 }, 
        width: width * size,
        height: width * size, 
    }))

    const[snake, setSnake] = useState(new Snake({
        color: TERTIARY, 
        length: 6, 
        platformWidth: width, 
        platformHeight: height, 
        size: (1 / 10)
    }))
    
    const [count, setCount] = useState(0)

    // Controls 
    useKeypress('ArrowUp', () => {
        snake.setDirection(1)
        setSnake(snake)
        setIsSwipe(false)
    });

    useKeypress('ArrowRight', () => {
        snake.setDirection(2)
        setSnake(snake)
        setIsSwipe(false)
    });

    useKeypress('ArrowDown', () => {
        snake.setDirection(3)
        setSnake(snake)
        setIsSwipe(false)
    });

    useKeypress('ArrowLeft', () => {
        snake.setDirection(4)
        setSnake(snake)
        setIsSwipe(false)
    });

    useAnimationFrame(deltaTime => {
        setCount(prevCount => (prevCount + deltaTime * 0.05) % 100)
    })

    useEffect(() => {
        if(isSwipe) {
            snake.setHeadNextPos(swipeDirection)
        } else {
            snake.setHeadNextPos(snake.direction)
        }
        if(count > 5) {
            // Move the snake
            snake.moveSnake()
            setSnake(snake)

            setCount(0)
        }
    }, [count, snake, isSwipe, swipeDirection])
    
    return (
        <svg xmlns="http://www.w3.org/2000/svg" x={pos.x} y={pos.y} width={width} height={height} fill='#000'>
            <SnakeComp snake={snake} />
            {/* <FoodComp food={food} /> */}
        </svg>
    )
}

interface SnakeProps {
    snake: ISnake
}

const SnakeComp: React.FC<SnakeProps> = ({ snake }) => {
    let snakeBlocks = snake.body.map((block, i) => {
    
    return (
        <SnakeBlock key={i}
                    nextPos={block.nextPos}
                    pos={block.pos} 
                    width={snake.size}
                    height={snake.size}
                    color={block.color}
        />
    )
})
    
    return (
        <g> 
            {snakeBlocks}
        </g>
    )
}

const SnakeBlock: React.FC<ISnakeBlock> = ({ pos, width, height, color }) => {
    return (
        <rect x={pos.x} y={pos.y} width={width} height={height} fill={color} stroke={color} style={{ transition: 'all .1s linear' }}></rect>
    )
}

interface FoodProps {
    food: IBlock
}

const FoodComp: React.FC<FoodProps> = ({ food }) => {
    return (
        <rect x={food.pos.x} 
              y={food.pos.y} 
              width={food.width} 
              height={food.height} 
              fill={food.color} 
              stroke={food.color} 
        />
    )
}