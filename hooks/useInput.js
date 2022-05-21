import { useState } from 'react';

function useInput(initialValue) {
    const [input, setInput] = useState(initialValue);

    const handleInputChange = (evt) => {
        setInput(evt.target.value);
    }

    const resetInput = () => {
        setInput("");
    }

    return [input, handleInputChange, resetInput];
}


export default useInput;