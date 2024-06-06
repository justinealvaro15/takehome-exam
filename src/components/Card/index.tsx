import './index.css'

export interface CardProps {
    title: string;
    children?: React.ReactNode;
}

const Card = ({ title, children }: CardProps) => {
    return (
        <div className="card-root">
            <p className="card-title">{title}</p>
            <div className="card-content">
                {children}
            </div>
        </div>
    );
};

export default Card;
