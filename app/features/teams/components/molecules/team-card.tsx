import { Link } from "react-router";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Badge } from "~/common/components/ui/badge";
import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";

interface Props {
  id: string;
  leaderUsername: string;
  leaderAvatarUrl: string;
  positions: string[];
  projectDescription: string;
}

export default function TeamCard({
  id,
  leaderUsername,
  leaderAvatarUrl,
  positions,
  projectDescription,
}: Props) {
  return (
    <Link to={`/teams/${id}`}>
      <Card className={"bg-transparent hover:bg-card/50 transition-colors"}>
        <CardHeader className={"flex flex-row items-center"}>
          <CardTitle className={"text-base leading-loose"}>
            <div className={"flex flex-wrap items-center gap-1"}>
              <Badge
                className={"inline-flex shadow-sm items-center text-base mr-1"}
                variant={"secondary"}
              >
                <span>@{leaderUsername}</span>
                <Avatar className={"size-5"}>
                  <AvatarFallback>J</AvatarFallback>
                  <AvatarImage src={leaderAvatarUrl} />
                </Avatar>
              </Badge>

              <span>is looking for a new member</span>

              {positions.map((position) => (
                <Badge key={position} className={"text-base"}>
                  {position}
                </Badge>
              ))}
              
              <span>to build</span>
              <span> {projectDescription}</span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardFooter className={"justify-end"}>
          <Button variant={"link"}>Join team &rarr;</Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
