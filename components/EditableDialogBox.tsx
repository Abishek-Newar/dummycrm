import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"
import EditableDailogPreview from './ui/EditableDialogPreview'

const EditableDialogBox = ({Mindex,Index,title}: {Mindex:number,Index:number,title: string}) => {

    
    return (
        <div >
            <Dialog>
                <DialogTrigger>- {title}</DialogTrigger>
                <DialogContent className='w-[80vw]'>
                <DialogTitle>ADD A LESSON</DialogTitle>
                <EditableDailogPreview Mindex={Mindex} Index={Index} />
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default EditableDialogBox