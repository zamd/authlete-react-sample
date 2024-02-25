import { Button } from "./ui/button";
import { useAuth } from "react-oidc-context";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";

export const LoginView = () => {
  const auth = useAuth();
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Authlete + Super Token Integration Demo
        </CardTitle>
        <CardDescription>
          Login below to see your Authlete issued tokens
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Separator className='mb-4' />
        <Button className="justify-self-start" onClick={() => auth.signinRedirect()}>Login</Button>

      </CardContent>
    </Card>
  );
}
