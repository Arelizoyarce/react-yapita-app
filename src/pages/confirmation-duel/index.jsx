import withResponsiveContainer from "../../hoc/responsive-container";
import ConfirmationDuelContainer from './container';
import ConfirmationDuelContent from "./content";

const ConfirmationDuel = () => {
  const ResponsiveDuelContainer = withResponsiveContainer(ConfirmationDuelContent, { width: true });

    return <ConfirmationDuelContainer>
        <ResponsiveDuelContainer/>
      </ConfirmationDuelContainer>
  };
  
  export default ConfirmationDuel;
  