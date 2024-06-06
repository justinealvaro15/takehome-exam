import { useContext } from 'react';
import objectives, { ObjectiveValue } from '../../constants/objectives';
import Card from '../Card';
import ObjectiveCard from '../ObjectiveCard';

import RookieIcon from '../../assets/rookie.svg?react';
import ThreeMinuteMiracleIcon from '../../assets/3-minute-miracle.svg?react';
import GunsBlazingIcon from '../../assets/guns-blazing.svg?react';

import './index.css'
import { TrialContext } from '../../context/trialContext';


const SetObjective = () => {
    const { objective, onObjectiveChange } = useContext(TrialContext);

    const getIcon = (value: ObjectiveValue) => {
        switch (value) {
            case ObjectiveValue.Rookie:
                return <RookieIcon />;
            case ObjectiveValue.ThreeMinuteMiracle:
                return <ThreeMinuteMiracleIcon />;
            case ObjectiveValue.GunsBlazing:
                return <GunsBlazingIcon />;
            default:
                return <></>;
        }
    };

    return (
        <div className="set-objective-root">
            <Card title="Set Objectives">
                <div className="set-objective-row">
                    {objectives.map(({ name, description, value }) => {
                        const icon = getIcon(value);
                        const handleClick = () => onObjectiveChange?.(value);

                        return (
                            <ObjectiveCard
                                name={name}
                                description={description}
                                icon={icon}
                                selected={value === objective}
                                onClick={handleClick}
                                key={value}
                            />
                        );
                    })}
                </div>
            </Card>
        </div>
    );
};

export default SetObjective;
