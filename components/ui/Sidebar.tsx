import { Button } from "./button"

const Sidebar = () => {
    const hashing = ["Dummy","Dummy","Dummy","Dummy","Dummy",]
    
  return (
    <aside className="w-[20%] min-h-screen border">
        <Container text="HASH" array={hashing} />
          
    </aside>
  )
}

function Container({text,array}: {text:string,array: string[]}){
    return  <div className="flex flex-col">
    <h1 className="text-center text-blue-400">{text}</h1>
    {
        array.map((item,index)=>(
            <Button  key={index} variant="ghost">{item}</Button>
        ))
    }
</div>
}

export default Sidebar