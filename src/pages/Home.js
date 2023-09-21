import "../styles/Home.css";
import React, { useState } from "react";

import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SortableUser = ({ item }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      key={item.id}
    >
      <Card
        sx={{
          maxWidth: 345,
          marginTop: 2,
          marginBottom: 2,
          cursor: "-webkit-grab",
        }}
      >
        <CardMedia component="img" height="200" image={item.image} alt="im" />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {item.tag}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

function Home() {
  const [filter, setFilter] = useState("");
  const [Items, setItems] = useState([
    {
      id: 1,
      tag: "first picture",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.YxstgBqqSQbRO14THxWXEAHaEo&pid=Api&P=0&h=220",
    },
    {
      id: 2,
      tag: "second picture",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.uvLp3WBj-fSfmeKyyxvsdwHaEo&pid=Api&P=0&h=220",
    },

    {
      id: 3,
      tag: "third picture",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.q1STB3YqkMvCON6QQVAoegHaF7&pid=Api&P=0&h=220",
    },
    {
      id: 4,
      tag: "fourth picture",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.FPmbUcb50Uw2irlK5PYmZAHaF7&pid=Api&P=0&h=220",
    },
    {
      id: 5,
      tag: "fifth picture",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.xcYKkSST5F1QcuWvspJYQQHaEo&pid=Api&P=0&h=220",
    },
    {
      id: 6,
      tag: "sixth picture",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.qirmcuwmkP0rvWABdDiPmQHaEo&pid=Api&P=0&h=220",
    },
    {
      id: 7,
      tag: "seventh picture",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.dP-ErzyyOC4o5w5cmPb05AHaFj&pid=Api&P=0&h=220",
    },
    {
      id: 8,
      tag: "eigth picture",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.38_l025VfdpPryTEs5uV0gHaFj&pid=Api&P=0&h=220",
    },
  ]);

  const onDragEnd = (event) => {
    const { active, over } = event;
    if (active.id === over.id) {
      return;
    }
    setItems((Items) => {
      const oldIndex = Items.findIndex((item) => item.id === active.id);
      const newIndex = Items.findIndex((item) => item.id === over.id);
      return arrayMove(Items, oldIndex, newIndex);
    });
  };
  //for search

  const SearchItem = (event) => {
    setFilter(event.target.value);
  };
  const dataSearch = Items.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });
  return (
    <div>
      <h2 className="img">Image Gallery</h2>
      <div className="SearchBar">
        <h5>Search</h5>
        <input
          type="text"
          className="search"
          value={filter}
          onChange={SearchItem.bind(this)}
        />
      </div>

      <div className="cardWrapper">
        <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
          <SortableContext items={Items} strategy={verticalListSortingStrategy}>
            {dataSearch.map((item) => (
              <SortableUser key={item.id} item={item} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}

export default Home;
