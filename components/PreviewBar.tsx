"use client"
import React from 'react'
import { useRecoilState } from 'recoil'
import { moduleState } from './Provider'
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt();
const PreviewBar = () => {
  const [module,setModule] = useRecoilState(moduleState)
  return (
    <aside className="w-[20%] min-h-screen border">
        <h1>Preview</h1>
        <p>title: {module.title}</p>
        <p>description: <div dangerouslySetInnerHTML={{ __html: md.render(module.description) }} /></p>
        {
          module.modules.map((item,index)=>(
            <div key={index}>
              <p>{item.title}</p>
              {item.lesson.map((item,index)=>(
                //@ts-ignore
                <p key={index}>- {item.title}</p>
              ))}
            </div>
          ))
        }
    </aside>
  )
}

export default PreviewBar