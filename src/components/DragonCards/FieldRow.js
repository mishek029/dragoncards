import SingleCard from './SingleCard'

const FieldRow = (props) => {

    const maxY = props.maxY;
    const x = props.x;
    const rowCards = props.rowCards;

    const getFields = (count, x) => {
        const rows = [];

        for (let i = 0; i < count; i++) {

            let found = false;

            rowCards.map((item) => {

                if (item.y === i) {
                    rows.push(
                        <td>
                            <SingleCard
                                y={i}
                                x={x}
                                topL={item.topL}
                                topR={item.topR}
                                botL={item.botL}
                                botR={item.botR}
                            ></SingleCard>
                        </td>
                    )
                    found = true;
                }

            }
            )

            if (!found) {
                rows.push(
                    <td>
                        <SingleCard y={i} x={x} topL="none" topR="none" botL="none" botR="none"></SingleCard>
                    </td>
                )
            }

        }

        return rows;
    }

    return (
        <tr>
            {getFields(maxY, x)}
        </tr>

    )
}

export default FieldRow;