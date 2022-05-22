function Input({ value, name, placeholder, onChange, }) {

    return (
        <input
            type="text"
            value={value}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
        />
    )
}

export default Input