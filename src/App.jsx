import "./App.css";
import { Header } from "./components/layout/Header";
import { Main } from "./components/layout/Main";
import { SideBar } from "./components/layout/SideBar";
import { ContextProvider } from "./components/ui/context/ContextProvider";
function App() {
  return (
    <ContextProvider>
      <div className="w-full h-full">
        <div className="h-[6vh]">
          <Header />
        </div>
        <div className="grid w-full gap-x-3 grid-cols-[0.7fr_2fr] xl:grid-cols-[0.6fr_2fr] md:grid-cols-[1fr_2fr] h-[93.8vh]">
          <SideBar />
          <Main />
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
