import { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

import illustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";
import logoDarkModeImg from "../../assets/images/logo-dark-mode.svg";

import { Button } from "../../components/Button";
import { ToggleThemeButton } from "../../components/ToggleThemeButton";

import { database } from "../../services/firebase";
import { useAuth } from "../../hooks/useAuth";

import { Container, Aside, Main } from "./styles";
import { useTheme } from "../../hooks/useTheme";

export function NewRoom() {
  const [newRoom, setNewRoom] = useState("");

  const { theme } = useTheme();
  const history = useHistory();
  const { user } = useAuth();

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim().length <= 3) {
      toast.error("Digite um nome de sala válido");
      return;
    }

    const roomRef = database.ref("rooms");

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    history.push(`/admin/rooms/${firebaseRoom.key}`);
  }

  return (
    <Container>
      <Toaster />
      <Aside>
        <img
          src={illustrationImg}
          alt="Illustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </Aside>
      <Main>
        <div className="main-content">
          <ToggleThemeButton fixed />
          <img
            src={theme.title === "light" ? logoImg : logoDarkModeImg}
            alt="Letmeask"
          />
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              value={newRoom}
              onChange={(event) => setNewRoom(event.target.value)}
            />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
          </p>
        </div>
      </Main>
    </Container>
  );
}
