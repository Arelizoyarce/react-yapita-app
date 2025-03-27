
import withResponsiveContainer from "../../hoc/responsive-container";
import InitContainer from "./container";
import InitContent from "./content";

const Init = () => {
  const ResponsiveInitContent = withResponsiveContainer(InitContent);

  return (
    <InitContainer>
      <ResponsiveInitContent />
    </InitContainer>
  );
  
};

export default Init;
