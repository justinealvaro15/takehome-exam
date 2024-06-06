import './index.css'

export interface TrialParameterRowProps {
    name: string;
    description: string;
    children: React.ReactNode;
}

const TrialParameterRow = ({ name, description, children }: TrialParameterRowProps) => {
    return (
        <div className="trial-parameter-root">
            <div className="trial-parameter-info">
                <p className="trial-parameter-name">{name}</p>
                <p className="trial-parameter-description">{description}</p>
            </div>
            {children}
        </div>
    );
};

export default TrialParameterRow;
