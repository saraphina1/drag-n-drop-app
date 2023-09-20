// import React,{useState} from 'react';
// import { DndContext,closestCenter } from '@dnd-kit/core';
// import { arrayMove,SortableContext, verticalListSortingStrategy} from '@dnd-kit/sortable';
// import { SortableFile } from '../components/SortableFile';

// function Home() {
// const [ImageList, setImageList]=useState([
//   {
//     id: 1,
//     url: "https://tse1.mm.bing.net/th?id=OIP.92wIxwnq8FIO9oOg0KaF-QHaEo&pid=Api&P=0&h=220"
//   },
//   {
//     id: 2,
//     url: "https://tse3.mm.bing.net/th?id=OIP.Y6yexcPPN9jw4MnvOBQcxgHaEo&pid=Api&P=0&h=220"
//   },
//   {
//     id: 3,
//     url: "https://tse2.mm.bing.net/th?id=OIP.8SLe-6w0Q0yxvgbQi5eGcwHaFj&pid=Api&P=0&h=220"
//   },
//   {
//     id: 4,
//     url: "https://tse4.mm.bing.net/th?id=OIP.Z6FKeDZdq2_liTU7AvTi8wHaFj&pid=Api&P=0&h=220"
//   },
//   {
//     id: 5,
//     url: "https://tse3.mm.bing.net/th?id=OIP.zDU7SlDI0vRiI7PhKE4JKgHaFj&pid=Api&P=0&h=220"
//   },
//   {
//     id: 6,
//     url: "https://tse2.mm.bing.net/th?id=OIP.xcYKkSST5F1QcuWvspJYQQHaEo&pid=Api&P=0&h=220"
//   },
// ])

//   return (
//     <DndContext
//     collisionDetection={closestCenter}
//     onDragEnd={handleDragEnd}
//     >
      


// <div className="container p-3" style={{"width":"80%"}} align="center">
// <h3>Image Gallery</h3>
// <SortableContext 
// items={ImageList}
// strategy={verticalListSortingStrategy}
// >
//   <div>
//     {/* {ImageList.map(Image=> <SortableFile key={Image} id={Image}/>)} */}
//     {ImageList.map(({id, url})=>(
//       <SortableFile key={id}  id={url}/>
    
//     ))}
//      {ImageList.id} 
//   </div>


// </SortableContext>
// </div>



//     </DndContext>
    
//   );
//   function handleDragEnd(event){
//      console.log('Drag end called')
//   }
// }

// export default Home
import React from 'react'

function Home() {
  return (
    <div>Home</div>
  )
}

export default Home