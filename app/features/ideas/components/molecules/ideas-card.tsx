import { DotIcon, EyeIcon, HeartIcon, LockIcon } from "lucide-react";
import { Link } from "react-router";
import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { cn } from "~/lib/utils/utils";

interface Props {
  id: string;
  title: string;
  viewsCount: number;
  postedAt: string;
  likesCount: number;
  claimed?: boolean;
}

export default function IdeasCard({
  id,
  title,
  viewsCount,
  postedAt,
  likesCount,
  claimed,
}: Props) {
  function renderButton() {
    return !claimed ? (
      <Button>
        <Link to={`/ideas/${id}/comments`}>Claim idea now &rarr;</Link>
      </Button>
    ) : (
      <Button variant={"outline"} className={"cursor-not-allowed"}>
        <LockIcon className={"w-4 h-4"} />
        <span>Claimed</span>
      </Button>
    );
  }

  return (
    <Card className={"bg-transparent hover:bg-card/50 transition-colors"}>
      <CardHeader>
        <Link to={`/ideas/${id}/claim`}>
          <CardTitle className={"text-xl"}>
            <span className={cn(claimed ? "bg-foreground selection:bg-foreground" : "")}>{title}</span>
          </CardTitle>
        </Link>
      </CardHeader>
      <CardContent className={"flex items-center text-sm"}>
        <div className={"flex items-center gap-2"}>
          <EyeIcon className={"w-4 h-4"} />
          <span>{viewsCount}</span>
        </div>
        <DotIcon className={"w-4 h-4"} />
        <span>{postedAt}</span>
      </CardContent>
      <CardFooter className={"flex items-center gap-4"}>
        <Button variant={"outline"} className={"flex items-center"}>
          <HeartIcon className={"w-4 h-4"} />
          <span>{likesCount}</span>
        </Button>
        {renderButton()}
      </CardFooter>
    </Card>
  );
}
