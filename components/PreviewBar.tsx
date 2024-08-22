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
    </aside>
  )
}

export default PreviewBar