import { useContext } from 'react';
import Card from '../Card';
import ToggleRadio from '../ToggleRadio';
import TrialParameterRow from './TrialParameterRow';
import TextInput from '../TextInput';
import { TrialContext } from '../../context/trialContext';

import './index.css'

const TRIAL_DURATION_VALUES = [72, 96, 120];

const SetTrialParameters = () => {
    const {
        duration,
        rewards,
        maxPayout,
        onDurationChange,
        onRewardsChange,
        onMaxPayoutChange,
    } = useContext(TrialContext);

    const durationOptionsMapping = TRIAL_DURATION_VALUES.map((value) => ({
        label: `${value} HOURS`,
        value,
    }));

    return (
        <div className="set-trial-param-root">
            <Card title="Set Trial Parameters">
                <div className="set-trial-param-content">
                    <TrialParameterRow
                        name="Duration"
                        description="Set expiration time to complete the Trial"
                    >
                        <ToggleRadio options={durationOptionsMapping} currentValue={duration} onClick={onDurationChange} />
                    </TrialParameterRow>
                    <TrialParameterRow
                        name="Rewards"
                        description="Set rewards to be won by the Trial winners"
                    >
                        <div className="set-trial-param-field">
                            <TextInput
                                value={rewards}
                                onChange={(e) => onRewardsChange?.(e.target.value)}
                                placeholder="Enter reward"
                            />
                        </div>
                    </TrialParameterRow>
                    <TrialParameterRow
                        name="Maximum Payouts"
                        description="Set maximum number of payouts to be won"
                    >
                        <div className="set-trial-param-field">
                            <TextInput
                                value={maxPayout}
                                onChange={(e) => onMaxPayoutChange?.(e.target.value)}
                                placeholder="Enter payout"
                            />
                        </div>
                    </TrialParameterRow>
                </div>
            </Card>
        </div>
    );
};

export default SetTrialParameters;
