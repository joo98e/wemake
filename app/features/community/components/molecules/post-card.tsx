import { Link } from "react-router";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { DotIcon } from "lucide-react";

interface PostCardProps {
  id: string;
  title: string;
  authorName: string;
  authorAvatarUrl?: string;
  category: string;
  postedAt: string;
}

const defaultAvatarUrl = "https://github.com/apple.png";

const PostCard = ({
  id: postId,
  title,
  authorName,
  authorAvatarUrl,
  category,
  postedAt,
}: PostCardProps) => {
  return (
    <Link to={`/community/${postId}`}>
      <Card className="bg-transparent hover:bg-card/50 transition-colors">
        <CardHeader className="flex flex-row items-center gap-2 space-y-0">
          <Avatar className="size-14">
            <AvatarFallback>
              {authorName.charAt(0).toUpperCase()}
            </AvatarFallback>
            <AvatarImage src={authorAvatarUrl ?? defaultAvatarUrl} />
          </Avatar>
          <div className="space-y-2">
            <CardTitle>{title}</CardTitle>
            <div className="flex gap-2 text-xs leading-tight text-muted-foreground">
              <span>{authorName}</span>
              <span>{category}</span>
              <DotIcon className={"w-4 h-4"} />
              <span>{postedAt}</span>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="flex justify-end">
          <Button variant="link" asChild>
            Reply &rarr;
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default PostCard;
