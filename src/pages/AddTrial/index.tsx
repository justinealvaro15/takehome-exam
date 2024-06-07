import SetObjective from "../../components/SetObjective";
import SetTrialParameters from "../../components/SetTrialParameters";
import TrialPreview from "../../components/TrialPreview";

import './index.css';

const AddTrial = () => {
    return (
        <div className="add-trial">
            <div className="add-trial-fields">
                <SetObjective />
                <SetTrialParameters />
            </div>
            <TrialPreview />
        </div>
    );
};

export default AddTrial;
