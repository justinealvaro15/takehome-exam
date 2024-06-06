import clsx from 'clsx';
import './index.css'

export interface ObjectiveCardProps {
    name: string;
    description: string;
    icon: React.ReactNode;
    selected?: boolean;
    onClick?: () => void;
}

const ObjectiveCard = ({ name, description, icon, selected = false, onClick }: ObjectiveCardProps) => {
    return (
        <div className={clsx('objective-card-root', selected && 'objective-card-active')} onClick={onClick}>
            <p className="objective-card-name">{name}</p>
            <p className="objective-card-description">{description}</p>
            <div className="objective-card-icon">{icon}</div>
        </div>
    );
};

export default ObjectiveCard;
