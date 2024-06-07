import '../index.css'

export interface TrialPreviewCardRowProps {
    name: string;
    description?: string;
    supportingInfo?: Array<{
        display: string
    }>;
}

const TrialPreviewCardRow = ({ name, description, supportingInfo }: TrialPreviewCardRowProps) => {
    return (
        <div className="trial-preview-card-data-row">
            <p className="trial-preview-card-header-title">{name}</p>
            <p className="trial-preview-card-data-value">{description}</p>
            <div>
                {supportingInfo?.map((label) => (
                    <p className="trial-preview-card-data-description" key={label.display}>
                        {label.display}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default TrialPreviewCardRow;
