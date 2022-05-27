import styles from '../styles/drop-down-menu.module.scss';

function MenuItem({ option, selectItem, isActive }) {
    return (
        <span
            className={`${isActive && styles.active_item}`}
            onClick={() => selectItem(option)}>
            {option}
        </span>
    )
}

export default MenuItem