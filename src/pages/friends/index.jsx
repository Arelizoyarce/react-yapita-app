import withResponsiveContainer from "../../hoc/responsive-container";
import FriendsContainer from './container';
import FriendsContent from "./content";

const Friends = () => {
  const ResponsiveDashboardContainer = withResponsiveContainer(FriendsContent, { width: true });

    return <FriendsContainer>
        <ResponsiveDashboardContainer/>
      </FriendsContainer>
  };
  
  export default Friends;
  