import React, { useState } from "react";
import { IItem } from "./types/todo";
interface IProp {
  onAddTodo: (todo: IItem) => void;
}

type OnlyTitle = Pick<IItem, "title">;

const AddToDo: React.FC<IProp> = (props) => {
  const [todo, title] = useState<Partial<OnlyTitle>>({});
  const titleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    title({ title: e.target.value });
  };

  // const titleInputRef = useRef<HTMLInputElement>(null)
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (!todo.title) {
      return;
    }
    console.log(todo.title);
    props.onAddTodo(todo as IItem);

    // console.log(titleInputRef.current?.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <span>Add title</span>
        <input
          type="text"
          id="addToDo"
          onChange={titleHandler}
          // ref={titleInputRef}
        />
      </div>
      <button type="submit">Add todo</button>
    </form>
  );
};

export default AddToDo;
