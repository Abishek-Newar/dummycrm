"use client"
import * as DialogPrimitive from "@radix-ui/react-dialog";
import MarkdownIt from "markdown-it";
import { useEffect, useState } from "react";
import { FaFileDownload } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { moduleState } from "../Provider";
import { Button } from "./button";
import { ImCross } from "react-icons/im";
import EditableDialogContents from "./EditableDialogContents";

const md = new MarkdownIt();
const EditableDailogPreview = ({Mindex,Index}: {Mindex:number,Index:number}) => {
  const [module,setModule] = useRecoilState(moduleState)
  const [video, setVideo] = useState(module.modules[Mindex].lesson[Index].videoURL)
  const [videoBuffer, setVideoBuffer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [title,setTitle] = useState(module.modules[Mindex].lesson[Index].title)
  const [description,setDescription] = useState(module.modules[Mindex].lesson[Index].description)
  const [file,setFile] = useState(module.modules[Mindex].lesson[Index].supportFile)
  
  console.log(video)
  function ButtonClick(Index:number) {
    let tempModule = { ...module };
    tempModule.modules = tempModule.modules.map((mod, modIndex) => {
        if (modIndex === Mindex) {
            return {
                ...mod,
                lesson: mod.lesson.map((les, lesIndex) => {
                    if (lesIndex === Index) {
                        return {
                            ...les,
                            title: title,
                            videoURL: video,
                            description: description,
                            supportFile: file
                        };
                    }
                    return les;
                })
            };
        }
        return mod;
    });

    // Set the new state
    setModule(tempModule);
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
      <EditableDialogContents title={title} titleChanges={handleTitleChange} description = {description} setDescription={setDescription} video= {video} handleVideoUpload={handleVideoUpload} file={file} handleFileUpload={handleFileUpload}/>
    <div className='min-h-full w-[25%] border flex flex-col justify-between p-3'>
        <div className="w-full ">
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
            <p className="h-[400px] overflow-y-auto">Decription:<div dangerouslySetInnerHTML={{ __html: md.render(description) }} /></p>
        </div>
        <div>
          <p>support files</p>
          {
            file.map((file,index)=>(
              <a key={index} className="w-32" href={//@ts-ignore
                file?.files} download={file.name}>
              {//@ts-ignore
              file.name} {//@ts-ignore
                file.name && <FaFileDownload />
              }
           </a>
            ))
          }
        </div>
        </div>
        <DialogPrimitive.Close><Button onClick={()=>ButtonClick(Index)} variant="outline">ADD</Button></DialogPrimitive.Close>
    </div>
    </div>
  )
}

export default EditableDailogPreview