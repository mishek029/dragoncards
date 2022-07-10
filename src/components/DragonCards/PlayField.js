import FieldRow from './FieldRow'
import './../UI/PlayField.css';

const PlayField = (props) => {

    const maxX = props.maxX;
    const maxY = props.maxY;
    const fieldCards = props.fieldCards;

    const getRows = (count, maxY) => {

        let rowCards = [];

        const rows = [];

        for (let i = 0; i < count; i++) {

            let found = false;

            fieldCards.map((item) => {
                if (item.x === i) {
                    rowCards.push(item)
                    found = true;
                }


            })

            rows.push(
                <FieldRow
                    x={i}
                    maxY={maxY}
                    rowCards={rowCards}
                ></FieldRow>
            )

            rowCards = [];

        }

        return rows;
    }

    return (
        <table class='playField'>
            {getRows(maxX, maxY)}
        </table>
    )

}

export default PlayField;