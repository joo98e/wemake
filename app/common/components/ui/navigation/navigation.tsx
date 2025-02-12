import { Link } from "react-router";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "~/common/components/ui/navigation-menu";
import { Separator } from "~/common/components/ui/separator";

const menus = [
  {
    name: "Products",
    to: "/products",
    items: [
      {
        name: "Leaderboards",
        description: "See the top performers in your community",
        to: "/products/leaderboards",
      },
      {
        name: "Categories",
        description: "See the top performers in your community",
        to: "/products/leaderboards",
      },
      {
        name: "Search",
        description: "Search for a product",
        to: "/products/search",
      },
      {
        name: "Submit a Product",
        description: "Submit a product to our database",
        to: "/products/submit",
      },
      {
        name: "Promote",
        description: "Promote a product to our community",
        to: "/products/promote",
      },
    ],
  },
  {
    name: "Jobs",
    to: "/jobs",
    items: [
      {
        name: "Remote Jobs",
        description: "Find a remote job in our community",
        to: "/jobs?location=remote",
      },
      {
        name: "Full-Time Jobs",
        description: "Find a remote job in our community",
        to: "/jobs?location=full-time",
      },
      {
        name: "Freelance Jobs",
        description: "Find a freelance job in our community",
        to: "/jobs?location=freelance",
      },
      {
        name: "Internships",
        description: "Find a internship job in our community",
        to: "/jobs?location=internship",
      },
      {
        name: "Submit a Job",
        description: "Submit a job to our community",
        to: "/jobs/submit",
      },
    ],
  },
  {
    name: "Commnuity",
    to: "/community",
    items: [
      {
        name: "All Posts",
        description: "See all posts in our community",
        to: "/community",
      },
      {
        name: "Top Posts",
        description: "See the top posts in our community",
        to: "/community?sort=top",
      },
      {
        name: "New Posts",
        description: "See the new posts in our community",
        to: "/community?sort=new",
      },
      {
        name: "Create a Post",
        description: "Create a post in our community",
        to: "/community/create",
      },
    ],
  },
  {
    name: "IdeasGPT",
    to: "/ideas",
  },
  {
    name: "Teams",
    to: "/teams",
    items: [
      {
        name: "All Teams",
        description: "See all teams in our community",
        to: "/teams",
      },
      {
        name: "Create a Team",
        description: "Create a team in our community",
        to: "/teams/create",
      },
    ],
  },
];

export default function Navigation() {
  return (
    <nav
      className={
        "flex px-20 h-16 items-center justify-between backdrop-blur fixed top-0 left-0 right-0 z-50 bg-background/50"
      }
    >
      <div className={"flex items-center"}>
        <Link to={"/"} className={"font-bold tracking-tighter text-lg"}>
          Joo98e
        </Link>
        <Separator orientation={"vertical"} className={"h-6"} />
        <NavigationMenu>
          <NavigationMenuList>
            {menus.map((menu) => (
              <NavigationMenuItem key={menu.name}>
                <NavigationMenuTrigger>{menu.name}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  {menu.items?.map((item) => (
                    <NavigationMenuItem key={item.name}>
                      <Link to={item.to}>{item.name}</Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
