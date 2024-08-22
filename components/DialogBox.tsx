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
                    <Button className='w-full'>ADD LESSON</Button>
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