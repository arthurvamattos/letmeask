import { useHistory } from "react-router-dom";
import logOutImg from "../../assets/images/log-out.svg";
import { useAuth } from "../../hooks/useAuth";

import { Button } from "./styles";

type SignOutButtonProps = {
  fixed?: boolean;
};

export function SignOutButton({ fixed = false }: SignOutButtonProps) {
  const { signOut } = useAuth();
  const history = useHistory();

  function handleSignOut() {
    signOut();
    history.push("/");
  }

  return (
    <Button fixed={fixed} onClick={handleSignOut}>
      <img src={logOutImg} alt="Deslogar" />
    </Button>
  );
}
