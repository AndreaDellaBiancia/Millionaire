import BadAnsw from "./BadAnswInterface";
import GoodAnsw from "./GoodAnswInterface";
import HomeHelpInterface from "./HomeHelpInterface";
import Question from "./QuestionInterface";

interface QuestionToHandle {
 question: Question ,
 goodAnswer: GoodAnsw,
 badAnswers: BadAnsw[],
 homeHelp: HomeHelpInterface
}

export default QuestionToHandle;
