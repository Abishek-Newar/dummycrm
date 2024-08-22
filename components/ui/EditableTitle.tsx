"use client"
import React, { useState } from 'react'
import { useRecoilState } from 'recoil';
import { moduleState } from '../Provider';
import { Button } from './button';
import { Input } from './input';
import { FaRegEdit } from 'react-icons/fa';

const EditableTitle = ({ index }: { index: number }) => {
  const [editable, setEditable] = useState(false)
  const [title, setTitle] = useState("");
  const [module, setModule] = useRecoilState(moduleState)
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
          <div className='flex gap-2'>
            <Input onChange={(e: any) => { setTitle(e.target.value) }} />
            <Button onClick={() => HandleInputChange(index)}>Done</Button>
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