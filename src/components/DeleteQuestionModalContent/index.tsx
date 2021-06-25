import { database } from "../../services/firebase";

import deleteImg from "../../assets/images/delete-danger.svg";

import { Container } from "./styles";

type DeleteQuestionModalContentProps = {
  closeModal: () => void;
  roomId: string;
  questionId: string;
};

export function DeleteQuestionModalContent({
  closeModal,
  roomId,
  questionId,
}: DeleteQuestionModalContentProps) {
  async function handleDeleteQuestion() {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    closeModal();
  }

  return (
    <Container>
      <img src={deleteImg} alt="Lixeira" />
      <strong>Excluir pergunta</strong>
      <span>Tem certeza que você deseja excluir esta pergunta?</span>
      <div>
        <button onClick={closeModal}>Cancelar</button>
        <button className="delete" onClick={handleDeleteQuestion}>
          Sim, excluir
        </button>
      </div>
    </Container>
  );
}
