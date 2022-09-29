import { GlobalCss } from "./styles/GlobalStyles";
import { Router } from "./Router";

export default function App() {
  return (
    <div>
      <Router />
      {GlobalCss()}
    </div>
  )
}
