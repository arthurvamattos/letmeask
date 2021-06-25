import { useTheme } from "../../hooks/useTheme";

import sunImg from "../../assets/images/sun.svg";
import moonImg from "../../assets/images/moon.svg";

import { Button } from "./styles";

type ToggleThemeButtonProps = {
  fixed?: boolean;
};

export function ToggleThemeButton({ fixed = false }: ToggleThemeButtonProps) {
  const { toggleTheme, theme } = useTheme();

  return (
    <Button
      fixed={fixed}
      dark={theme.title === "dark"}
      onClick={() => toggleTheme()}
    >
      <img src={theme.title === "light" ? sunImg : moonImg} alt="Trocar tema" />
    </Button>
  );
}
