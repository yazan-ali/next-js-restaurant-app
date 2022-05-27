import { useState } from 'react';

function useAddItem() {

    const [state, setState] = useState(null);

    const handleAddItem = async (url, body) => {

        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json();
        setState(data)
    }

    return [state, handleAddItem];
}

export default useAddItem;