import clsx from 'clsx';
import './index.css'

interface ToggleRadioOption {
    value: number;
    label: string;
}

export interface ToggleRadioProps {
    options: ToggleRadioOption[];
    currentValue?: ToggleRadioOption['value'];
    onClick?: (value: ToggleRadioOption['value']) => void;
}

const ToggleRadio = ({ options, currentValue, onClick }: ToggleRadioProps) => {
    return (
        <div className="toggle-radio-root">
            {options.map(({ value, label }) => {
                const selected = value === currentValue;
                const handleClick = () => onClick?.(value);
                return (
                    <div className={clsx('toggle-radio-item', selected && 'toggle-radio-active')} onClick={handleClick} key={value}>
                        <p className="toggle-radio-label">{label}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default ToggleRadio;
