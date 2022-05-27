import { useState, memo } from 'react';
import styles from '../styles/drop-down-menu.module.scss';
import MenuItem from '../components/menuItem';

function DropDownMenu({ list, placeholder, onChange }) {

    const [activeItem, setActiveItem] = useState(list[0]);
    const [expandList, setExpandList] = useState(false);

    const toggleList = () => {
        setExpandList(prev => !prev)
    }

    const selectItem = (selectedItem = activeItem) => {
        setActiveItem(selectedItem);
        onChange(selectedItem);
        toggleList();
    }

    return (
        <div className={styles.dropdown_menu}>
            <p
                onClick={toggleList}
                className={styles.selected_item}>
                {expandList ? placeholder : activeItem}  {
                    expandList ?
                        <i className="far fa-chevron-up"></i>
                        :
                        <i className="far fa-chevron-down"></i>
                }
            </p >
            {expandList &&
                <div className={styles.menu_list}>
                    {list.map((option, i) => (
                        <MenuItem
                            key={i}
                            option={option}
                            selectItem={selectItem}
                            isActive={activeItem === option}
                        />
                    ))}
                </div>
            }
        </div>
    )
}

export default memo(DropDownMenu);