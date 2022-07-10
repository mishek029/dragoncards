import './../UI/Gameboard.css';
import PlayField from './PlayField'
import PlayerCards from './PlayerCards'

const GameBoard = () => {

    const maxX = 8;
    const maxY = 8;

    const firstCard = 2;
    const lastCard = 8;

    const playerCards = [
        { topL: "blue", topR: "red", botL: "black", botR: "red" },
        { topL: "blue", topR: "red", botL: "yellow", botR: "yellow" },
        { topL: "blue", topR: "red", botL: "black", botR: "black" },
        { topL: "red", topR: "red", botL: "black", botR: "red" },
        { topL: "blue", topR: "blue", botL: "yellow", botR: "red" },
        { topL: "yellow", topR: "yellow", botL: "yellow", botR: "yellow" },
        { topL: "yellow", topR: "yellow", botL: "yellow", botR: "yellow" },
        { topL: "red", topR: "red", botL: "black", botR: "red" },
        { topL: "blue", topR: "blue", botL: "yellow", botR: "red" },
    ]

    const fieldCards = [
        { topL: "blue", topR: "blue", botL: "blue", botR: "blue", x: 5, y: 1 },
        { topL: "blue", topR: "red", botL: "black", botR: "red", x: 0, y: 1 },
        { topL: "blue", topR: "red", botL: "yellow", botR: "yellow", x: 0, y: 5 },
        { topL: "blue", topR: "red", botL: "black", botR: "black", x: 1, y: 2 },
        { topL: "red", topR: "red", botL: "black", botR: "red", x: 1, y: 3 },
        { topL: "blue", topR: "blue", botL: "yellow", botR: "red", x: 2, y: 4 },
        { topL: "yellow", topR: "yellow", botL: "yellow", botR: "yellow", x: 3, y: 4 },
        { topL: "yellow", topR: "yellow", botL: "yellow", botR: "yellow", x: 4, y: 3 },
        { topL: "red", topR: "red", botL: "black", botR: "red", x: 4, y: 4 },
        { topL: "blue", topR: "blue", botL: "yellow", botR: "red", x: 4, y: 5 }
    ]

    console.log('something')

    return (
        <table class="gameBoard">
            <tr>
                <td>
                    <PlayerCards maxX={maxX} playerCards={playerCards} firstCard={firstCard} lastCard={lastCard}></PlayerCards>
                </td>
                <td>
                    <PlayField maxX={maxX} maxY={maxY} fieldCards={fieldCards} ></PlayField>
                </td>
            </tr>
        </table>
    )


}

export default GameBoard;