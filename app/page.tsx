import Image from "next/image";
import data from "@/assets/data.json";
import CardText from "@/components/CardText";
import Card from "@/components/Card";
export default function Home() {
  return (

<>
<main className="flex justify-center py-4">

<Card>
  
<div className="h-[450px] relative">
<Image 
src={data.image_url}
width={500}
height={500}
alt={data.title}
className="object-cover rounded-t-[32px] h-full"
/>

<div className="w-full absolute bottom-0 flex justify-center mb-8">
  <div className="w-3/4 bg-black opacity-60 px-4 py-2 rounded-xl">
  <h1 className="text-2xl font-bold">{data.title}</h1>

  </div>
</div>

</div>

<CardText text={data.summary} />

</Card> 






</main>
</>
  );
}
