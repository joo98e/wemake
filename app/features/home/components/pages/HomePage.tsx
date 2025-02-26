import { DotIcon, EyeIcon, HeartIcon } from "lucide-react";
import { Link, type MetaFunction } from "react-router";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import InternalPaths from "~/common/constants/InternalPaths";
import PostCard from "~/features/community/components/molecules/post-card";
import { ProductCard } from "~/features/home/components/molecules/product-card";
import IdeasCard from "~/features/ideas/components/molecules/ideas-card";

export const meta: MetaFunction = () => [
  {
    title: "Home | wemake",
  },
  {
    name: "description",
    content: "Welcome to wemake",
  },
];

export default function HomePage() {
  const avtarUrl = "https://github.com/joo98e.png";

  return (
    <div className={"space-y-40"}>
      <div className="grid grid-cols-3 gap-4 mt-12">
        <div>
          <h2 className={"text-5xl font-bold leading-tight tracking-tight"}>
            Today's Products
          </h2>
          <p className={"text-xl font-light text-foreground"}>
            The best products made by our community today
          </p>
          <Button variant={"link"} asChild className={"textlg p-0"}>
            <Link to={"/products/leaderboards"}>
              Explore all products &rarr;
            </Link>
          </Button>
        </div>

        {Array.from({ length: 10 }).map((_, i) => (
          <ProductCard
            key={i}
            id="productId"
            title="Product Title"
            description="Product Description"
            commentsCount={12}
            viewsCount={12}
            votesCount={120}
          />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4 mt-12">
        <div>
          <h2 className={"text-5xl font-bold leading-tight tracking-tight"}>
            Latest Discussions
          </h2>
          <p className={"text-xl font-light text-foreground"}>
            The latest discussions from our community
          </p>
          <Button variant={"link"} asChild className={"textlg p-0"}>
            <Link to={"/community"}>Explore all discussions &rarr;</Link>
          </Button>
        </div>

        {Array.from({ length: 10 }).map((_, i) => (
          <PostCard
            key={i}
            id={i + ""}
            title={"What is the best productivity tool?"}
            authorName={"Joo98e"}
            authorAvatarUrl={avtarUrl}
            category={"Productivity"}
            postedAt={"12 hours ago"}
          />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4 mt-12">
        <div>
          <h2 className={"text-5xl font-bold leading-tight tracking-tight"}>
            Ideas GPT
          </h2>
          <p className={"text-xl font-light text-foreground"}>
            Find ideas for your next project.
          </p>
          <Button variant={"link"} asChild className={"textlg p-0"}>
            <Link to={"/community"}>Explore all Ideas &rarr;</Link>
          </Button>
        </div>

        {Array.from({ length: 5 }).map((_, i) => (
          <IdeasCard
            key={i}
            id={i + ""}
            title={`
            A startup that creates an AI-powered generated personal trainer,
            delivering customized fitness recommendations and tracking of
            progress using a mobile app to track workouts and progress as well
            as a wbsite to manage the business.
            `}
            viewsCount={123}
            postedAt={"12 hours ago"}
            likesCount={12}
            claimed={i % 2 === 0}
          />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4 mt-12">
        <div>
          <h2 className={"text-5xl font-bold leading-tight tracking-tight"}>
            Latest Jobs
          </h2>
          <p className={"text-xl font-light text-foreground"}>
            Find your dream job.
          </p>
          <Button variant={"link"} asChild className={"textlg p-0"}>
            <Link to={"/community"}>Explore all jobs &rarr;</Link>
          </Button>
        </div>

        
      </div>
    </div>
  );
}
