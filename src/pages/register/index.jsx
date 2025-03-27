import RegisterContainer from "./container";
import withResponsiveContainer from "../../hoc/responsive-container";
import RegisterContent from "./content";

const Register = () => {
  const ResponsiveRegisterContent = withResponsiveContainer(RegisterContent);

  return (
    <RegisterContainer>
      <ResponsiveRegisterContent />
    </RegisterContainer>
  );
};

export default Register;
