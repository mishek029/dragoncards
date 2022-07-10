import './../UI/PlayerCard.css';
import SingleCard from './SingleCard'

const PlayerCard = (props) => {

    const x = props.x + 1;
    const y = props.y + 1;
    const topL = props.topL;
    const topR = props.topR;
    const botL = props.botL;
    const botR = props.botR;

    return (
        <table>
            <tr>
                <td className='playerCard-card'>
                    <SingleCard y={y} x={x} topL={topL} topR={topR} botL={botL} botR={botR}></SingleCard>
                </td>
            </tr>
        </table>

    )
}

export default PlayerCard;