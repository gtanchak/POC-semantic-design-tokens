import {useState} from "react";

export default function UserPage() {


    const allItems = [
        { id: 'apple', value: '🍎 apple' },
        { id: 'orange', value: '🍊 orange' },
        { id: 'grape', value: '🍇 grape' },
        { id: 'pear', value: '🍐 pear' },
    ]



    const [items, setItems] = useState(allItems)

    console.log(items);

    function addItem() {
        const itemIds = items.map(i => i.id)
        const itemToAdd = allItems.find(i => !itemIds.includes(i.id))
        if (itemToAdd) setItems([...items, itemToAdd])
    }

    function removeItem(id: string) {
        setItems(items.filter(i => i.id !== id))
    }

    return (
        <main>
            <button disabled={items.length >= allItems.length} onClick={addItem}>
                add item
            </button>
            <ul>
                {items.map((item: any) => (
                    <li>
                        <button onClick={() => removeItem(item.id)}>remove</button>
                        {' '}
                        <label htmlFor={`${item.id}-input`}>{item.value}</label>{' '}
                        <input id={`${item.id}-input`} defaultValue={item.value} key={item.value} />
                    </li>
                ))}
            </ul>
        </main>
    )
}