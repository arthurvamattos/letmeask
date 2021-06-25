import { database } from "../../services/firebase";

import closeImg from "../../assets/images/close.svg";

import { Container } from "./styles";
import { useHistory } from "react-router-dom";

type EndRoomModalContentProps = {
  closeModal: () => void;
  roomId: string;
};

export function EndRoomModalContent({
  closeModal,
  roomId,
}: EndRoomModalContentProps) {
  const history = useHistory();

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      closedAt: new Date(),
    });

    history.push("/");
  }

  return (
    <Container>
      <img src={closeImg} alt="Lixeira" />
      <strong>Encerrar sala</strong>
      <span>Tem certeza que você deseja encerrar esta sala?</span>
      <div>
        <button onClick={closeModal}>Cancelar</button>
        <button className="delete" onClick={handleEndRoom}>
          Sim, encerrar
        </button>
      </div>
    </Container>
  );
}
