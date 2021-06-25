import emptyQuestionsImg from "../../assets/images/empty-questions.svg";
import { Container } from "./styles";

type NoQuestionsProps = {
  message: string;
};

export function NoQuestions({ message }: NoQuestionsProps) {
  return (
    <Container>
      <img src={emptyQuestionsImg} alt="Sem questões" />
      <strong>Nenhuma pergunta por aqui...</strong>
      <span>{message}</span>
    </Container>
  );
}
