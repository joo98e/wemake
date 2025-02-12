import { log } from "console";
import { Button } from "~/common/components/ui/button";

export default function Page() {
  function handleClickButton() {
    log(5);
  }

  return (
    <div className="m-[12rem] flex flex-col gap-12 justify-center items-center">
      <h1 className="text-4xl">🚀 Go</h1>
    </div>
  );
}
