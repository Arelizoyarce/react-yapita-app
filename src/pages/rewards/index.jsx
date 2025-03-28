import withResponsiveContainer from "../../hoc/responsive-container";
import RewardsContainer from "./container";
import RewardsContent from "./content";

const Rewards = () => {
    const ResponsiveRewardsContainer = withResponsiveContainer(RewardsContent);

    return <RewardsContainer>
        <ResponsiveRewardsContainer />
    </RewardsContainer>
};

export default Rewards;
