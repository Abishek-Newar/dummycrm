"use client"
import React, { useState } from 'react'
import { useRecoilState } from 'recoil';
import { moduleState } from '../Provider';
import { Button } from './button';
import { Input } from './input';
import { FaRegEdit } from 'react-icons/fa';

const EditableTitle = ({ index }: { index: number }) => {
  const [editable, setEditable] = useState(false)
  
  const [module, setModule] = useRecoilState(moduleState)
  const [title, setTitle] = useState(module.modules[index].title);
  function HandleInputChange(Index: number) {
    setModule((prevModule) => ({
      ...prevModule,
      modules: prevModule.modules.map((module, index) => {
        if (index === Index) {
          return {
            ...module,
            title: title
          };
        }
        return module;
      })
    }));
    setEditable(false)

  }
  return (
    <div>
      {
        editable ?
          <div className='flex items-center gap-2'>
            <Input className='h-8' value={title} onChange={(e: any) => { setTitle(e.target.value) }} />
            <Button className='h-8' onClick={() => HandleInputChange(index)}>Done</Button>
          </div>
          :
          <div className='flex gap-2'>
            <p>{module.modules[index].title}</p>
            <p onClick={() => setEditable(true)}> <FaRegEdit /></p>
          </div>
      }
    </div>
  )
}

export default EditableTitle