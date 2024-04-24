import React, { useState } from 'react'
import styled from 'styled-components'

// Requirements
// Players can take turns to place an X or a O on the board.
// A player wins if three of their marks are in a horizontal, vertical, or diagonal row.
// Display the current game status at the top: whose turn it is, winner (if any), or draw.
// Add a "Reset" button to allow the game to be restarted at any time.

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px 50px;
`;

const Headline = styled.h1`
    background-color: peachpuff;
`;

const GameStatusContainer = styled.h2`
    background-color: pink;
`;

const GameboardLayout = styled.div`
    background-color: pink;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 15px;
    grid-template-columns: repeat(3, 1fr);
    min-height: 800px;
    max-width: 800px;
    margin: 20px auto;
    width: 100%;
`;

const GameSqaureStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: blue;
    color: white;
    font-size: 60px;
`;

const GameReset = styled.button`
    background-color: yellow;
`;

type Sqaure = {
    sqaureNumber: number, 
    selectedBy: string | null
}

const defaultBoardState: Sqaure[] = [
    {
        sqaureNumber: 1,
        selectedBy: null,
    },
    {
        sqaureNumber: 2,
        selectedBy: null,
    },
    {
        sqaureNumber: 3,
        selectedBy: null,
    },
    {
        sqaureNumber: 4,
        selectedBy: null,
    },
    {
        sqaureNumber: 5,
        selectedBy: null,
    },
    {
        sqaureNumber: 6,
        selectedBy: null,
    },
    {
        sqaureNumber: 7,
        selectedBy: null,
    },
    {
        sqaureNumber: 8,
        selectedBy: null,
    },
    {
        sqaureNumber: 9,
        selectedBy: null,
    }
]

function resetBoard() {
    setBoardState([...defaultBoardState])
}

export default function TicTacToe() {
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [boardState, setBoardState] = useState(new Set());

    const GameStatus = ({gameStatus, player}:any ) => {
        const gameStatusContent = 'left off'

        return (
            <GameStatusContainer>Player {player} {gameStatusContent}</GameStatusContainer>
        )
    }

    const GameSqaure = ({selectedBy, sqaureNumber, handleSelectSqaure}: any) => {
        return (
            <GameSqaureStyles onClick={() => handleSelectSqaure(currentPlayer, sqaureNumber)}>
                <span>{selectedBy}</span>
            </GameSqaureStyles>
        )
    }


    const GameResetButton = () => {
        return (<GameReset onClick={resetBoard}>Reset Game</GameReset>)
    }

    function handleSelectSqaure(currentPlayer: string, sqaureNumber: number) {
     
        console.log(currentPlayer, sqaureNumber)

        if(boardState.has(sqaureNumber)) {
            console.log('Sqaure has already been selected')
            return
        } else {
            const addSqaure = {
                sqaureNumber: sqaureNumber,
                selectedBy: currentPlayer,
            }
            boardState.add(addSqaure)

            if(currentPlayer === "X") {
                setCurrentPlayer("Y")
            } else {
                setCurrentPlayer("X")
            }
        }
    }

    return (
        <Layout>
            <Headline>Tic Tac Toe</Headline>
         
            <GameStatus gameStatus={} player={}/>

            <GameboardLayout>
                 {defaultBoardState.map(({selectedBy, sqaureNumber}) => {
                    return <GameSqaure selectedBy={selectedBy} sqaureNumber={sqaureNumber} handleSelectSqaure={() => handleSelectSqaure(currentPlayer, sqaureNumber)} key={sqaureNumber} />
                 })}
            </GameboardLayout>

            <GameResetButton />
        </Layout>
    )
}