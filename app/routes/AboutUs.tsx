import type { RouteConfig } from "@react-router/dev/routes";
import type { Route } from "../+types/root";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { Button } from "~/components/ui/button";

export default function AboutUs() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="max-w-2xl text-center">
        <h1 className="mb-6 text-4xl font-bold dark:text-white">회사 소개</h1>
        <p className="mb-8 text-gray-600 dark:text-gray-300 text-2xl">
          혁신적인 웹 솔루션을 만드는 우리 팀을 소개합니다
        </p>
        <div className="space-y-6">
          <p className="text-gray-600 dark:text-gray-300 text-2xl">
            최신 기술과 창의적인 아이디어로 고객의 비전을 실현합니다
          </p>
          <a
            href="/"
            className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            홈으로 가기
          </a>
        </div>
      </div>

      <Button>안녕하세요</Button>
    </main>
  );
}

export const meta: Route.MetaFunction = () => {
  return [
    {
      title: "소개",
    },
  ];
};
