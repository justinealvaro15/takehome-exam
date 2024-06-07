import { useMemo } from 'react';
import objectives, { ObjectiveValue } from '../../../constants/objectives';

import TrialPreviewCardRow from './TrialPreviewCardRow';
import TrialStatusBadge from '../TrialStatusBadge';
import DiamondIcon from '../../../assets/diamond.svg?react';
import AvatarIcon from '../../../assets/avatar.svg?react';
import CheckIcon from '../../../assets/check.svg?react';

import './index.css'

export interface TrialPreviewCardProps {
    hostName: string;
    objective?: ObjectiveValue;
    duration?: number;
    rewards?: string;
    maxPayout?: number;
}

const TrialPreviewCard = ({
    hostName,
    objective,
    duration,
    rewards,
    maxPayout,
}: TrialPreviewCardProps) => {
    const { name: objectiveName, label: objectiveLabels } = objectives.find((obj) => obj.value === objective) ?? {};

    const formattedDuration = useMemo(() => {
        if (!duration) {
            return '';
        }
        const h = Math.floor(duration / 3600);
        const m = Math.floor(duration % 3600 / 60);
        const s = Math.floor(duration % 3600 % 60);

        return `${h}h ${('0' + m).slice(-2)}m ${('0' + s).slice(-2)}s`;
    }, [duration]);

    return (
        <div className="trial-preview-card-root">
            <div className="trial-preview-card-header">
                <div className="trial-preview-card-header-info">
                    <AvatarIcon />
                    <p className="trial-preview-card-host">Hosted by {hostName}</p>
                    <CheckIcon />
                </div>
                <TrialStatusBadge />
            </div>
            <div className="trial-preview-card-reward">
                <p className="trial-preview-card-header-title">TRIAL COMPLETION REWARD</p>
                <p className="trial-preview-card-reward-value">{rewards || 'Reward Name'}</p>
                <DiamondIcon className="trial-preview-card-reward-icon" />
            </div>
            <div className="trial-preview-card-data">
                <TrialPreviewCardRow
                    name="TIME LEFT"
                    description={formattedDuration}
                />
                <TrialPreviewCardRow
                    name="PAYOUTS LEFT"
                    description={`${maxPayout}/${maxPayout}`}
                />
                <TrialPreviewCardRow
                    name="OBJECTIVE"
                    description={objectiveName}
                    supportingInfo={objectiveLabels}
                />
            </div>
        </div>
    );
};

export default TrialPreviewCard;
