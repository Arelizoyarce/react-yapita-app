import withResponsiveContainer from "../../hoc/responsive-container";
import DuelsContainer from './container';
import DuelsContent from "./content";

const Duels = () => {
  const ResponsiveDashboardContainer = withResponsiveContainer(DuelsContent, { width: true });

    return <DuelsContainer>
        <ResponsiveDashboardContainer/>
      </DuelsContainer>
  };
  
  export default Duels;
  