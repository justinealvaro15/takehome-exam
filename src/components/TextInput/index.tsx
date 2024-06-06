import { InputHTMLAttributes } from 'react';
import './index.css'

const TextInput = (props: InputHTMLAttributes<HTMLInputElement> ) => {
    return (
        <input {...props} className="text-input-root" />
    );
};

export default TextInput;
