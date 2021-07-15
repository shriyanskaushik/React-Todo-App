import React, {useState, useEffect} from 'react'

export const List = ({ getItems }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(getItems());
        console.log("Number Updated");
    }, [getItems]);

    return (
        items.map(item => <div key={item}>{item}</div>)
    )
}