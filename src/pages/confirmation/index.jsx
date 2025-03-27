import withResponsiveContainer from "../../hoc/responsive-container";
import ConfirmationContainer from "./container";
import ConfirmationContent from "./content";

const Confirmation = () => {
  const ResponsiveConfirmationContent = withResponsiveContainer(ConfirmationContent);

    return <ConfirmationContainer>
      <ResponsiveConfirmationContent/>
    </ConfirmationContainer>;
  };
  
  export default Confirmation;
  