"use client"
import { ReactNode } from "react"
import { atom, RecoilRoot} from 'recoil';
const Provider = ({children}: {children: ReactNode}) => {
  return (
    <RecoilRoot>
        {children}
    </RecoilRoot>
  )
}
export const moduleState = atom({
    key: 'moduleState',
    default: {
      title: "",
      description: "",
      modules: [{
          title: "Chapter",
          description: "",
          lesson: []
      }]
  }
  })

 export const videoState = atom({
    key: 'videoState',
    default: ''
 }) 
export default Provider