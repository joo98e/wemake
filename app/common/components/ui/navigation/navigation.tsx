import {
  BarChart3Icon,
  BellIcon,
  LogOutIcon,
  MessageCircleIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";
import { Link } from "react-router";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Button } from "~/common/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/common/components/ui/dropdown-menu";
import NavigationLink from "~/common/components/ui/link/NavigationLink";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "~/common/components/ui/navigation-menu";
import { Separator } from "~/common/components/ui/separator";
import InternalPaths from "~/common/constants/InternalPaths";
import { cn } from "~/lib/utils";

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

interface Props {
  isLoggedIn: boolean;
  hasNotifications: boolean;
  hasMessages: boolean;
}

export default function Navigation({
  isLoggedIn,
  hasNotifications,
  hasMessages,
}: Props) {
  function renderButtons() {
    if (isLoggedIn) {
      return (
        <div className={"flex items-center gap-2"}>
          <div className={"relative"}>
            <Button size={"icon"} variant={"ghost"} asChild>
              <NavigationLink
                href={InternalPaths.NOTIFICATIONS.path}
                onlyIcon
                icon={BellIcon}
              >
                공지사항
              </NavigationLink>
            </Button>
            {hasNotifications && (
              <div
                className={
                  "absolute top-1 right-1 size-2 bg-red-500 rounded-full"
                }
              />
            )}
          </div>

          <div className={"relative"}>
            <Button size={"icon"} variant={"ghost"} asChild>
              <NavigationLink
                href={InternalPaths.MESSAGES.path}
                onlyIcon
                icon={MessageCircleIcon}
              >
                메시지
              </NavigationLink>
            </Button>
            {hasMessages && (
              <div
                className={
                  "absolute top-1 right-1 size-2 bg-red-500 rounded-full"
                }
              />
            )}
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage src={"https://github.com/shadcn.png"} />
                <AvatarFallback>J</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent className={"w-56"}>
              <DropdownMenuLabel className={"flex flex-col gap-2"}>
                <span className={"font-medium"}>Joo98e</span>
                <span className={"text-xs text-muted-foreground"}>
                  jtbeok@gmail.com
                </span>
              </DropdownMenuLabel>

              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <DropdownMenuItem asChild className={"cursor-pointer"}>
                  <NavigationLink
                    icon={BarChart3Icon}
                    iconSize={8}
                    href={InternalPaths.DASHBOARD.path}
                  >
                    대시보드
                  </NavigationLink>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className={"cursor-pointer"}>
                  <NavigationLink
                    icon={UserIcon}
                    iconSize={8}
                    href={InternalPaths.PROFILE.path}
                  >
                    프로필
                  </NavigationLink>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className={"cursor-pointer"}>
                  <NavigationLink
                    icon={SettingsIcon}
                    iconSize={8}
                    href={InternalPaths.SETTINGS.path}
                  >
                    설정
                  </NavigationLink>
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              <DropdownMenuItem asChild className={"cursor-pointer"}>
                <NavigationLink
                  icon={LogOutIcon}
                  iconSize={8}
                  href={InternalPaths.LOGOUT.path}
                >
                  로그아웃
                </NavigationLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    }

    return (
      <div className={"flex gap-4 items-center"}>
        <Button asChild variant={"secondary"}>
          <Link to={"/auth/login"}>Login</Link>
        </Button>
        <Button asChild>
          <Link to={"/auth/signup"}>Sign Up</Link>
        </Button>
      </div>
    );
  }

  return (
    <nav
      className={
        "flex px-20 h-16 items-center justify-between backdrop-blur fixed top-0 left-0 right-0 z-50 bg-background/50"
      }
    >
      <div className={"flex items-center gap-4"}>
        <Link to={"/"} className={"font-bold tracking-tighter text-lg"}>
          Joo98e's wemake
        </Link>
        <Separator orientation={"vertical"} className={"h-6"} />
        <NavigationMenu>
          <NavigationMenuList>
            {menus.map((menu) => (
              <NavigationMenuItem key={menu.name}>
                {menu.items ? (
                  <>
                    <Link to={menu.to}>
                      <NavigationMenuTrigger>{menu.name}</NavigationMenuTrigger>
                    </Link>
                    <NavigationMenuContent>
                      <ul
                        className={
                          "grid w-[600px] font-light gap-3 p-4 grid-cols-2"
                        }
                      >
                        {menu.items?.map((item) => (
                          <NavigationMenuItem
                            key={item.name}
                            className={cn([
                              "select-none rounded-md transition-colors focus:bg-accent hover:bg-accent",
                              item.to === "/products/promote" &&
                                "col-span-2 bg-primary/10 hover:bg-primary/20 focus:bg-primary/20",
                              item.to === "/jobs/submit" &&
                                "col-span-2 bg-primary/10 hover:bg-primary/20 focus:bg-primary/20",
                            ])}
                          >
                            <NavigationMenuLink asChild>
                              <Link
                                className={
                                  "p-3 space-y-1 block leading-none no-underline outline-none"
                                }
                                to={item.to}
                              >
                                <span
                                  className={"text-sm font-medium leading-none"}
                                >
                                  {item.name}
                                </span>
                                <p
                                  className={
                                    "text-sm leading-snug text-muted-foreground"
                                  }
                                >
                                  {item.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </NavigationMenuItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link className={navigationMenuTriggerStyle()} to={menu.to}>
                    {menu.name}
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {renderButtons()}
    </nav>
  );
}
