import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = ({ version }) => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp (Version {version})</h1>
      <hr />
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
