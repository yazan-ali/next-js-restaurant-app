function Input({ value, name, label, type = "text", placeholder, onChange, required = false }) {

    return (
        <div className="input_field">
            <input
                className="text-field"
                type={type}
                value={value}
                name={name}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
            />
            <label className="input_label">{label}</label>
        </div>
    )
}

export default Input;