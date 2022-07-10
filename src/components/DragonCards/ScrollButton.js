import './../UI/ScrollButton.css';

const ScrollButton = (props) => {

    const direction = props.direction;

    return (
        <tr>
            <td className='scrollButton'>
                SCROLL {direction}
            </td>
        </tr>
    )

}

export default ScrollButton;