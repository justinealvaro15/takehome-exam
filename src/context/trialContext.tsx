import React, { createContext, useState } from 'react';
import { ObjectiveValue } from '../constants/objectives';

export type TrialContextType = {
    objective: ObjectiveValue;
    duration: number;
    rewards: string;
    maxPayout: number;
    onObjectiveChange: (value: ObjectiveValue) => void;
    onDurationChange: (value: number) => void;
    onRewardsChange: (rewards: string) => void;
    onMaxPayoutChange: (value: string) => void;
};

export const TrialContext = createContext<Partial<TrialContextType>>({});

const TrialProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [objective, setObjective] = useState<ObjectiveValue>(ObjectiveValue.Rookie);
    const [duration, setDuration] = useState<number>(72);
    const [rewards, setRewards] = useState<string>('');
    const [maxPayout, setMaxPayout] = useState<number>(10);

    const handleObjectiveChange = (value: ObjectiveValue) => setObjective(value);
    const handleDurationChange = (value: number) => setDuration(value);
    const handleRewardsChange = (value: string) => setRewards(value);
    const handleMaxPayoutChange = (value: string) => {
        const numberOnlyCondition = /^\d+$/;

        if (value === '') {
            setMaxPayout?.(0);
        }

        if (value.match(numberOnlyCondition)) {
            setMaxPayout?.(parseInt(value));
        }
    };

    return (
        <TrialContext.Provider
            value={{
                objective,
                duration,
                rewards,
                maxPayout,
                onObjectiveChange: handleObjectiveChange,
                onDurationChange: handleDurationChange,
                onRewardsChange: handleRewardsChange,
                onMaxPayoutChange: handleMaxPayoutChange,
            }}
        >
            {children}
        </TrialContext.Provider>
    );
};

export default TrialProvider;
