import React, { useEffect, useState } from 'react'

const ItemList = () => {
    const [items, setItem] = useState(["apple", 'banana', 'orange']);
    useEffect(() => {
        console.log("useEffect 실행됨");
    }, [items]);

    const addItem = () => {
        const newItem = prompt("newItem을 입력하세요");
        if (newItem) {
            setItem((prevItem) => [...prevItem, newItem]);
        }
    };

   return (
    <div>
        ItemList
        <h2>Items</h2>
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
        <buttom onClick={addItem} className="border">
            Add Item
        </buttom>
    </div>
    );
}

export default ItemList