import "./App.css";
import { Header } from "./components/layout/Header";
import { Main } from "./components/layout/Main";
import { SideBar } from "./components/layout/SideBar";
import { ContextProvider } from "./components/ui/context/ContextProvider";
function App() {
  return (
    <ContextProvider>
      <div className="w-full flex flex-col px-2 gap-3 h-full">
        <div>
          <Header />
        </div>
        <div className="flex w-full gap-x-2 xl:grid-cols-[0.6fr_2fr] md:grid-cols-[1fr_2fr] h-[93.8vh]">
          <SideBar />
          <Main />
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
