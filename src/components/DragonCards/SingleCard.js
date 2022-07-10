import './../UI/SingleCard.css';

const SingleCard = (props) => {

    const x = props.x;
    const y = props.y;
    const topL = 'singleCard-topLeft-' + props.topL;
    const topR = 'singleCard-topRight-' + props.topR;
    const botL = 'singleCard-bottomLeft-' + props.botL;
    const botR = 'singleCard-bottomRight-' + props.botR;

    return (
        <td className='singleCard-card'>
            <tr>
                <td>
                    <div className={topL}>
                        TOP LEFT {x} {y}
                    </div>
                </td>
                <td>
                    <div className={topR}>
                        TOP RIGHT
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div className={botL}>
                        BOTTOM LEFT
                    </div>
                </td>
                <td>
                    <div className={botR}>
                        BOTTOM RIGHT
                    </div>
                </td>
            </tr>
        </td>
    )
}

export default SingleCard;