"use client"

import { useEffect, useState } from "react";
import DialogContents from "./ui/DialogContents"
import { useRecoilState } from "recoil";
import { moduleState, videoState } from "./Provider";
import MarkdownIt from "markdown-it";
import { Button } from "./ui/button";
const md = new MarkdownIt();
const DailogPreview = ({Index}: {Index:number}) => {
  const [video, setVideo] = useState("")
  const [videoBuffer, setVideoBuffer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")
  const [file,setFile] = useState(null)
  const [module,setModule] = useRecoilState(moduleState)

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
      setFile(file)
    }
  }
  
  return (
    <div className='min-h-[70vh] min-w-screen flex '>      
      <DialogContents title={title} titleChanges={handleTitleChange} description = {description} setDescription={setDescription} video= {video} handleVideoUpload={handleVideoUpload} file={file} handleFileUpload={handleFileUpload}/>
    <div className='min-h-full w-[25%] border'>
        <div className='w-full h-[30%]'>
            <video src={video} controls></video>
        </div>
        <div>
            <h1>Title: {title}</h1>
            <h1>Decription:<div dangerouslySetInnerHTML={{ __html: md.render(description) }} /></h1>

        </div>
        <Button onClick={()=>ButtonClick(Index)} variant="ghost">ADD</Button>
    </div>
    </div>
  )
}

export default DailogPreview