import withResponsiveContainer from "../../hoc/responsive-container";
import DashboardContainer from "./container";
import DashboardContent from "./content";

const Dashboard = () => {
  const ResponsiveDashboardContainer = withResponsiveContainer( DashboardContent);

    return <DashboardContainer>
      <ResponsiveDashboardContainer/>
    </DashboardContainer>
  };
  
  export default Dashboard;
  