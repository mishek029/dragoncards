import PlayerCard from './PlayerCard';
import './../UI/PlayerCard.css';
import './../UI/ScrollButton.css';

const PlayerCards = (props) => {

    const playerCards = props.playerCards;
    const firstCard = props.firstCard;
    const lastCard = props.lastCard;

    const getColumn = () => {
        const column = [];

        for (let i = firstCard; i < lastCard; i++) {
            column.push(
                <tr>
                    <PlayerCard
                        x={i}
                        y={1}
                        topL={playerCards[i].topL}
                        topR={playerCards[i].topR}
                        botL={playerCards[i].botL}
                        botR={playerCards[i].botR}
                    ></PlayerCard>
                </tr>
            )
        }

        return column;
    }

    return (
        <table class='playerCards'>

            <tr>
                <td class='playerCard-card'>
                    <td className='scrollButton'>
                        <div> SCROLL UP </div>
                    </td>
                </td>
            </tr>
            <tr>
                <td class='playerCard-card'>
                    <td className='scrollButton-emptySpace'>
                    </td>
                </td>
            </tr>

            {getColumn()}

            <tr>
                <td class='playerCard-card'>
                    <td className='scrollButton-emptySpace'>
                    </td>
                </td>
            </tr>

            <tr>
                <td class='playerCard-card'>
                    <td className='scrollButton'>
                        <div> SCROLL DD </div>
                    </td>
                </td>
            </tr>
        </table>
    )

}

export default PlayerCards;