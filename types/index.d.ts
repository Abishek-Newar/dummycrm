declare type DailogPros = {
    title: string,
    titleChanges: (event:any)=>void,
    description: string,
    setDescription: (event:any)=>void,
    video: string,
    handleVideoUpload:(event:any)=>void,
    file : any,
    handleFileUpload: (event:any)=>void
}