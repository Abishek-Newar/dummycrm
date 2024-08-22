import Index from "@/components/MarkdownEditor";
import MArkdownPreview from "@/components/MarkdownPreview";
import ModuleTree from "@/components/ModuleTree";
import PreviewBar from "@/components/PreviewBar";
import Provider from "@/components/Provider";
import Sidebar from "@/components/ui/Sidebar";
import Topbar from "@/components/ui/Topbar";

export default function Home() {
  return (
   <Provider>
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
   </Provider>
  );
}
 