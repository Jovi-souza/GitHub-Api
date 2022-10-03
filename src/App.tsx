import { GlobalCss } from "./styles/GlobalStyles";
import { Router } from "./Router";
import { ProfileContextProvider } from "./contexts/ProfileContext";

export default function App() {
  return (
    <div>
      <ProfileContextProvider>
        <Router />
        {GlobalCss()}
      </ProfileContextProvider>
    </div>
  )
}
