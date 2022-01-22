import { useTranslation } from "react-i18next";
import { messages } from "./i18n/messages";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="App">
      <h2>{t("home.introduction")}</h2>
      <h1>{t("home.welcome")}</h1>

      <h2>{t("home.message")}</h2>
      <span>{t("home.description")}</span>

      <h1>{t("login.title")}</h1>

      <div>
        <h1>{t("home.changelanguage")}</h1>

        <select
          name="language"
          onChange={(event) => i18n.changeLanguage(event.target.value)}
        >
          {Object.keys(messages).map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default App;
