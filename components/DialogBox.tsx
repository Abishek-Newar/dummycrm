import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import DialogContents from './ui/DialogContents'
import DailogPreview from './DailogPreview'
import { Button } from './ui/button'

const DialogBox = ({index}: {index:number}) => {

    
    return (
        <div >
            <Dialog>
                <DialogTrigger className='w-full'>
                    <div className='w-full h-10 flex justify-center items-center rounded-md text-white font-bold bg-blue-700 hover:bg-blue-900 transition-all ease-linear duration-300'>ADD LESSON</div>
                </DialogTrigger>
                
                <DialogContent className='w-[80vw]'>
                <DialogTitle>ADD A LESSON</DialogTitle>
                            <DailogPreview Index={index} />
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default DialogBox