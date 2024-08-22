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

const DialogBox = ({index,titleChange,descriptionChange,videoChange,fileChange}: {index:number}) => {
    return (
        <div >
            <Dialog>
                <DialogTrigger>ADD LESSON</DialogTrigger>
                
                <DialogContent className='w-[80vw]'>
                <DialogTitle>ADD A LESSON</DialogTitle>
                            <DailogPreview titleChange={titleChange} descriptionChange={descriptionChange} videoChange={videoChange} fileChange={fileChange} />
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default DialogBox