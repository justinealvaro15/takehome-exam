import { useContext } from 'react';
import { TrialContext } from '../../context/trialContext';
import Card from '../Card';
import TrialPreviewCard from './TrialPreviewCard';

import './index.css'

const DUMMY_HOST_NAME = 'Ohmmmmmmega';

const TrialPreview = () => {
    const {
        objective,
        duration = 0,
        rewards,
        maxPayout,
    } = useContext(TrialContext);

    return (
        <div className="trial-preview-root">
            <Card title="Trial Preview">
                <div className="trial-preview-content">
                    <TrialPreviewCard
                        hostName={DUMMY_HOST_NAME}
                        objective={objective}
                        duration={duration*60*60}
                        rewards={rewards}
                        maxPayout={maxPayout}
                    />
                </div>
            </Card>
        </div>
    );
};

export default TrialPreview;
