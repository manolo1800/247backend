import { forwardRef, useEffect, useRef } from 'react';
import {PhotoIcon,UserCircleIcon} from '@heroicons/react/24/outline'

export default forwardRef(function InputFile({className = '', isFocused = false, id, name, filehandle,value }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (

        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
                <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                        htmlFor="profile_photo_path"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                        <span>Cargar un archivo</span>
                        <input
                            id={id}
                            name={name}
                            ref={input}
                            className={className}
                            onChange={(e) => filehandle(e)}
                            required
                            type="file"
                            //value={value}
                        />
                    </label>
                    <p className="pl-1">o arrastrar y soltar</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
            </div>
        </div>
    );
});
