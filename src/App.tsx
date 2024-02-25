import "./App.css"
import { useAuth } from "react-oidc-context";
import { Loader } from "./components/Loader";
import { AuthenticatedView } from "./components/AuthenticatedView";
import { LoginView } from "./components/LoginView";

export function App() {
  const auth = useAuth();
  
  if (auth.error) {
    return <div>Oops... {auth.error.message}</div>;
  }

  if (auth.isLoading) {
    return <Loader />;
  }

  if (auth.isAuthenticated) {
    return <AuthenticatedView/>
  }
  
  return <LoginView/>
}
