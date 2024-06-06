import clsx from 'clsx';
import './index.css'

export interface ObjectiveCardProps {
    name: string;
    description: string;
    icon: React.ReactNode;
    selected?: boolean;
}

const ObjectiveCard = ({ name, description, icon, selected = false }: ObjectiveCardProps) => {
    return (
        <div className={clsx('objective-card-root', selected && 'objective-card-active')}>
            <p className="objective-card-name">{name}</p>
            <p className="objective-card-description">{description}</p>
            <div className="objective-card-icon">{icon}</div>
        </div>
    );
};

export default ObjectiveCard;
