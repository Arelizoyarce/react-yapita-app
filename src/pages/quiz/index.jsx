import withResponsiveContainer from "../../hoc/responsive-container";
import QuizContainer from "./container";
import QuizContent from "./content";

const Quiz = () => {
    const ResponsiveQuizContainer = withResponsiveContainer(QuizContent);

    return <QuizContainer>
        <ResponsiveQuizContainer />
    </QuizContainer>
};

export default Quiz;
