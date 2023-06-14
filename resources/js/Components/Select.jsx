import { forwardRef, useEffect, useRef } from 'react';

export default Select(function TextInput({ options = null, className='',input,handleChange,isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <select
            {...props}            
            onChange={(e) => handleChange(e)}
            className={
                'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ' +
                className
            }
            ref={input}
        >
        {options.}
        </select>
    );
});
