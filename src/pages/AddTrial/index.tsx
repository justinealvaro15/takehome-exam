import SetObjective from "../../components/SetObjective";
import SetTrialParameters from "../../components/SetTrialParameters";
import TrialPreview from "../../components/TrialPreview";

const AddTrial = () => {
    return (
        <div className="add-trial">
            <SetObjective />
            <SetTrialParameters />
            <TrialPreview />
        </div>
    );
};

export default AddTrial;
