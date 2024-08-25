import { Button } from "./button"
import { Icons } from "./icons"

const Sidebar = () => {
    const hashing = [{
        icon: <Icons.home />,
        title: "Home"
    },{
        icon: <Icons.work />,
        title: "Work"
    },{
        icon: <Icons.envelope />,
        title: "Envelope"
    },{
        icon: <Icons.home />,
        title: "Home"
    },{
        icon: <Icons.home />,
        title: "Home"
    },]
    
  return (
    <aside className="w-[15%] min-h-screen border">
        <Container text="CRM" array={hashing} />
          
    </aside>
  )
}

function Container({text,array}: {text:string,array: {icon: React.JSX.Element, title: string}[]}){
    return  <div className="flex flex-col p-6">
    <h1 className="text-center text-blue-300">{text}</h1>
    {
        array.map((item,index)=>(
            <Button  key={index} variant="ghost" className="flex justify-start gap-3"> {item.icon}{item.title}</Button>
        ))
    }
</div>
}

export default Sidebar