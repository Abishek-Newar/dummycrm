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

declare type lessonType = {
    title: string,
    description: string,
    video: string,
    supportFile: any
}

declare type modulesType = {
    title: string,
    description: string,
    lesson: lessonType[]
}

declare type moduleType = {
    title: string,
    description: string,
    modules: modulesType[]
}