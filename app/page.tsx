import ModuleTree from "@/components/ModuleTree";
import PreviewBar from "@/components/PreviewBar";
import Sidebar from "@/components/ui/Sidebar";
import Topbar from "@/components/ui/Topbar";

export default function Home() {
  return (
    <main  className="flex">
      <Sidebar />
      <div className="w-full flex flex-col">
        <Topbar />
        <div className="w-full flex">
          <ModuleTree />
          <PreviewBar />
        </div>
      </div>
      
    </main>
  );
}
 