import { useContext } from 'react';
import Card from '../Card';
import ToggleRadio from '../ToggleRadio';
import TrialParameterRow from './TrialParameterRow';
import { TrialContext } from '../../context/trialContext';

import './index.css'

const TRIAL_DURATION_VALUES = [72, 96, 120];

const SetTrialParameters = () => {
    const { duration, onDurationChange } = useContext(TrialContext);

    const durationOptionsMapping = TRIAL_DURATION_VALUES.map((value) => ({
        label: `${value} HOURS`,
        value,
    }))

    return (
        <div className="set-trial-param-root">
            <Card title="Set Trial Parameters">
                <div className="set-objective-row">
                    <TrialParameterRow name="Duration" description="Set expiration time to complete the Trial">
                        <ToggleRadio options={durationOptionsMapping} currentValue={duration} onClick={onDurationChange} />
                    </TrialParameterRow>
                </div>
            </Card>
        </div>
    );
};

export default SetTrialParameters;
