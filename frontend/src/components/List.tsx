import React from 'react';

interface Props {
    items?: String[]
}

export const List = (props: Props) => {
    return (
        <ul>
            <li> Just testing to see how integration works </li>
            { props.items ? props.items.map(el => <li> {el} </li>) : null }
        </ul>
    )
}