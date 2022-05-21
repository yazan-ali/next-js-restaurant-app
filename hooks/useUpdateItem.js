import { useState } from 'react';

function useItemUpdate() {
    const [state, setState] = useState(null);

    const handleItemUpdate = async (url, body) => {
        const response = await fetch(url, {
            method: "PUT",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json();
        setState(data)
    }

    return [state, handleItemUpdate];
}

export default useItemUpdate;