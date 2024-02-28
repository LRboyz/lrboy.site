import { PropsWithChildren, memo } from "react";
import Header from "../app/(web)/Header";

const AppLayoutDesktop = memo<PropsWithChildren>(({ children }) => {
  return (
    <div className="max-w-7xl border-x dark:border-zinc-800 mx-auto flex flex-col dark:bg-zinc-900/50 px-4 bg-white/70">
      <Header />
      <main className="h-full">{children}</main>
    </div>
  );
});

export default AppLayoutDesktop;

AppLayoutDesktop.displayName = "AppLayoutDesktop";
