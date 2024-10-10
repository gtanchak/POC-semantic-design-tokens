import {useState} from "react";

let data = 1
let newData = 2
export default function UserPage() {


    const [count, setCount] = useState(0);

    // Conditional hook call
    if (count > 1) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [name, setName] = useState(1);  // Hook inside condition
    } else {

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [test, setTest] = useState(1);  // Hook inside condition

    }



    return (
        <main>
            <div>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Increase Count {data} {newData}</button>
            </div>
        </main>
    )
}