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
import DailogPreview from './ui/DailogPreview'

const DialogBox = () => {
    return (
        <div>
            <Dialog>
                <DialogTrigger>ADD LESSON</DialogTrigger>
                <DialogContent className='w-[80vw]'>
                        <div className='min-h-[70vh] min-w-screen flex '>
                            <DialogContents />
                            <DailogPreview />
                        </div>
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default DialogBox