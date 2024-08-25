import ModuleTree from "@/components/ModuleTree";
import PreviewBar from "@/components/PreviewBar";
import Sidebar from "@/components/ui/Sidebar";
import Topbar from "@/components/ui/Topbar";
export default function Home() {
  return (
     <main  className="flex max-h-screen">
      <Sidebar />
      <div className="w-full flex max-h-screen flex-col">
        <Topbar />
        <div className="">
          <PreviewBar />
        </div>
      </div>
    </main>
  );
}
 