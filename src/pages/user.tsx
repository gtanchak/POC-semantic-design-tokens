import {useState} from "react";
import useCount from "./useCount.ts";

export default function UserPage() {


    const [count, setCount] = useState(0);

    // Conditional hook call
    if (count > 1) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const {count} = useCount();
        console.log(count);
    }



    return (
        <main>
            <div>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Increase Count</button>
            </div>
        </main>
    )
}