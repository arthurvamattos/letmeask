import { useParams, Link } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import logoDarkModeImg from "../../assets/images/logo-dark-mode.svg";
import deleteImg from "../../assets/images/delete.svg";
import checkImg from "../../assets/images/check.svg";
import answerImg from "../../assets/images/answer.svg";

import { Button } from "../../components/Button";
import { RoomCode } from "../../components/RoomCode";
import { Question } from "../../components/Question";
import { ToggleThemeButton } from "../../components/ToggleThemeButton";

import { useRoom } from "../../hooks/useRoom";
import { database } from "../../services/firebase";
import { useTheme } from "../../hooks/useTheme";

import { Container, Modal } from "./styles";
import { NoQuestions } from "../../components/NoQuestions";
import { useState } from "react";
import { DeleteQuestionModalContent } from "../../components/DeleteQuestionModalContent";
import { EndRoomModalContent } from "../../components/EndRoomModalContent";

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  const { theme } = useTheme();

  const [deleteQuestionModalIsOpen, setDeleteQuestionModalIsOpen] =
    useState(false);
  const [deleteQuestionId, setDeleteQuestionId] = useState("");

  const [endRoomModalIsOpen, setEndRoomModalIsOpen] = useState(false);

  const params = useParams<RoomParams>();
  const roomId = params.id;

  const { title, questions } = useRoom(roomId);

  function openDeleteQuestionModal(questionId: string) {
    setDeleteQuestionId(questionId);
    setDeleteQuestionModalIsOpen(true);
  }

  function closeDeleteQuestionModal() {
    setDeleteQuestionModalIsOpen(false);
  }

  function openEndRoomModal() {
    setEndRoomModalIsOpen(true);
  }

  function closeEndRoomModal() {
    setEndRoomModalIsOpen(false);
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    });
  }

  async function handleHighlightQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    });
  }

  return (
    <Container>
      <Modal
        isOpen={deleteQuestionModalIsOpen}
        onRequestClose={closeDeleteQuestionModal}
        contentLabel="Deletar pergunta"
        shouldCloseOnEsc
      >
        <DeleteQuestionModalContent
          closeModal={closeDeleteQuestionModal}
          questionId={deleteQuestionId}
          roomId={roomId}
        />
      </Modal>

      <Modal
        isOpen={endRoomModalIsOpen}
        onRequestClose={closeEndRoomModal}
        contentLabel="Deletar pergunta"
        shouldCloseOnEsc
      >
        <EndRoomModalContent closeModal={closeEndRoomModal} roomId={roomId} />
      </Modal>
      <header>
        <div className="content">
          <Link to="/">
            <img
              src={theme.title === "light" ? logoImg : logoDarkModeImg}
              alt="Letmeask"
            />
          </Link>

          <div>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={openEndRoomModal}>
              Encerrar sala
            </Button>
            <ToggleThemeButton />
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        <div className="question-list">
          {questions.length > 0 ? (
            questions.map((question) => (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
                isAnswered={question.isAnswered}
                isHighlighted={question.isHighlighted}
              >
                {!question.isAnswered && (
                  <>
                    <button
                      type="button"
                      onClick={() => handleCheckQuestionAsAnswered(question.id)}
                    >
                      <img
                        src={checkImg}
                        alt="Marcar pergunta como respondida"
                      />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleHighlightQuestion(question.id)}
                    >
                      <img src={answerImg} alt="Dar destaque à pergunta" />
                    </button>
                  </>
                )}
                <button
                  type="button"
                  onClick={() => openDeleteQuestionModal(question.id)}
                >
                  <img src={deleteImg} alt="Remover pergunta" />
                </button>
              </Question>
            ))
          ) : (
            <NoQuestions message="Envie o código desta sala para seus amigos e comece a responder perguntas!" />
          )}
        </div>
      </main>
    </Container>
  );
}
