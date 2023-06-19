import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function Select({ options = null, className = '', isFocused = false, id, name, selcthandle }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <select
            id={id}
            name={name}
            ref={input}
            className={className}
            onChange={(e) => selcthandle(e)}
            required
        >
            {options.map((option) => (
                <option value={option.value} key={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
});
