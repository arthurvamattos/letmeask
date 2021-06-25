import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

import { useAuth } from "../../hooks/useAuth";

import { Button } from "../../components/Button";
import { ToggleThemeButton } from "../../components/ToggleThemeButton";

import { database } from "../../services/firebase";

import illustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";
import logoDarkModeImg from "../../assets/images/logo-dark-mode.svg";
import googleIconImg from "../../assets/images/google-icon.svg";

import { Container, Aside, Main } from "./styles";
import { useTheme } from "../../hooks/useTheme";

export function Home() {
  const [roomCode, setRoomCode] = useState("");

  const { theme } = useTheme();

  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push("/rooms/new");
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim().length <= 3) {
      toast.error("Digite um código de sala válido");
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      toast.error("Sala não existe");
      return;
    }

    if (roomRef.val().closedAt) {
      toast.error("Esta sala esta fechada");
      return;
    }

    history.push(`/rooms/${roomCode}`);
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
          <button className="create-room" onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              value={roomCode}
              onChange={(event) => setRoomCode(event.target.value)}
            />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </Main>
    </Container>
  );
}
