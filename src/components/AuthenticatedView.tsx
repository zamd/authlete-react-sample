import { Button } from "./ui/button";
import { useAuth } from "react-oidc-context";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Avatar } from "./ui/avatar";

export function AuthenticatedView() {
  const auth = useAuth();
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Avatar>

          </Avatar>
          Hello {auth.user?.profile.sub}
        </CardTitle>
        <CardDescription>
          Authlete issued tokens:
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 grid-rows-3 gap-4">
        <Label className="text-gray-600 col-start-1 row-start-1">Id Token: </Label>
        <Label className="col-start-2 row-start-1 overflow-hidden">${auth.user?.id_token}...</Label>

        <Label className="col-start-1 row-start-2">Access Token:</Label>

        <Label className="col-start-2 row-start-2 overflow-hidden">${auth.user?.access_token}...</Label>

        <Button className="col-start-2 row-start-3 col-span-2 justify-self-start" onClick={() => auth.removeUser()}>
          Log out
        </Button>
      </CardContent>
    </Card>

  );
}
