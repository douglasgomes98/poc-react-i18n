import enHome from "./languages/en/home.json";
import enLogin from "./languages/en/login.json";
import ptBRHome from "./languages/pt-BR/home.json";
import ptLogin from "./languages/pt-BR/login.json";

export const messages = {
  en: {
    translation: {
      ...enHome,
      ...enLogin,
    },
  },
  "pt-BR": {
    translation: {
      ...ptBRHome,
      ...ptLogin,
    },
  },
};
