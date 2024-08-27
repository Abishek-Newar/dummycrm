"use client"
import * as DialogPrimitive from "@radix-ui/react-dialog";
import MarkdownIt from "markdown-it";
import { useEffect, useState } from "react";
import { FaFileDownload } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { moduleState } from "./Provider";
import { Button } from "./ui/button";
import DialogContents from "./ui/DialogContents";
import { ImCross } from "react-icons/im";
const md = new MarkdownIt();
const DailogPreview = ({Index}: {Index:number}) => {
  const [video, setVideo] = useState("")
  const [videoBuffer, setVideoBuffer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [title,setTitle] = useState("Chapter")
  const [description,setDescription] = useState("")
  const [file,setFile] = useState([])
  const [module,setModule] = useRecoilState(moduleState)
  console.log(video)
  function ButtonClick(Index:number) {
    console.log(Index)
    setModule((prevModule:any) => ({
      ...prevModule,
      modules: prevModule.modules.map((module:any, index:number) => {
        if (index === Index) {
          console.log(Index)
          return {
            ...module,
            lesson: [
              ...module.lesson,
              {
                title: title,
                description: description,
                videoURL: video,
                supportFile: file
              }
            ]
          };
        }
        return module;
      })
    }));
  }
  useEffect(()=>{
    console.log(module)
  },[module])
  

  const handleTitleChange = (event: any) =>{
    setTitle(event.target.value)
  }
  const handleVideoUpload = (event:any) => {
    const file = event.target.files[0];
    console.log(file)
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const buffer = reader.result || "";
        //@ts-ignore
        setVideoBuffer(buffer);
        const videoURL = URL.createObjectURL(new Blob([buffer]));
        setVideo(videoURL);
        console.log(videoURL)
      };
      reader.readAsArrayBuffer(file);
    }
  };


  const handleFileUpload = (event: any) =>{
    const file = event.target.files[0];
    if(file){
      console.log(file)
      const fileURL =  URL.createObjectURL(file)
      console.log(fileURL)
      //@ts-ignore
      setFile((prevFiles) => [
        ...prevFiles,
        {
            files: fileURL,
            name: file.name
        }
    ]);
    }
  }
  
  return (
    <div className='min-h-[70vh] min-w-screen flex  '>      
      <DialogContents title={title} titleChanges={handleTitleChange} description = {description} setDescription={setDescription} video= {video} handleVideoUpload={handleVideoUpload} file={file} handleFileUpload={handleFileUpload}/>
    <div className='min-h-full w-[25%] border flex flex-col justify-between p-3'>
        <div className="w-full h-full">
        {
          video === ""?
          null
          :
          <div className='w-full h-auto flex flex-col'>
            <div className="flex justify-end">
                <ImCross onClick={()=>setVideo("")} />
            </div>
            <video src={video} controls></video>
        </div>
        }
        <div>
            <h4>Title: {title}</h4>
            <p className="max-h-[300px] overflow-y-auto">Decription:<div dangerouslySetInnerHTML={{ __html: md.render(description) }} /></p>
        </div>
        <div >
          <p className="uppercase">support files</p>
          <div className="h-32 flex flex-col gap-3 overflow-y-auto">
          {
            file.map((file,index)=>(
              <a key={index} className=" flex items-center gap-3 border p-2 w-32 justify-center" href={//@ts-ignore
                file?.files} download={file.name}> FILE - 
              {//@ts-ignore
              index + 1} {//@ts-ignore
                file.name && <FaFileDownload />
              } {//@ts-ignore
                file.name && <ImCross onClick={()=>setVideo("")} />
              }
           </a>
            ))
          }
          </div>
        </div>
        
        </div>
        <DialogPrimitive.Close><Button onClick={()=>ButtonClick(Index)} variant="outline">ADD</Button></DialogPrimitive.Close>
    </div>
    </div>
  )
}

export default DailogPreview