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

export default function TicTacToe() {
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [boardState, setBoardState] = useState([...defaultBoardState]);

    const GameStatus = () => {
        return (
            <GameStatusContainer>Player {currentPlayer} Turn</GameStatusContainer>
        )
    }

    const GameSqaure = ({selectedBy}: any) => {
        return (
            <GameSqaureStyles>
                <span>{selectedBy}</span>
            </GameSqaureStyles>
        )
    }


    const GameResetButton = () => <GameReset>Reset Game</GameReset>;



    return (
        <Layout>
            <Headline>Tic Tac Toe - WIP</Headline>
         
            <GameStatus />

            <GameboardLayout>
                 {boardState.map(({selectedBy, sqaureNumber}) => {
                    return <GameSqaure selectedBy={selectedBy} key={sqaureNumber} />
                 })}
            </GameboardLayout>

            <GameResetButton />
        </Layout>
    )
}