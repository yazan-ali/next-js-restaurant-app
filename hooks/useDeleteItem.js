import { useState } from 'react';

function useItemDelete(items) {

    const [deleteStatus, setDeleteStatus] = useState(null);
    const [itemList, setItemList] = useState(items)

    const handleItemDelete = async (url, itemID) => {
        const response = await fetch(`${url}/${itemID}`, { method: "DELETE", });
        const data = await response.json();
        setDeleteStatus(data)

        const filteredItems = itemList.filter(item => item._id !== itemID)
        setItemList(filteredItems);
    }

    return [itemList, deleteStatus, handleItemDelete, setItemList];
}


export default useItemDelete;