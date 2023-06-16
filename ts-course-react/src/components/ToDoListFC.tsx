import React from "react";
import { IItem } from "./types/todo";

interface IProps {
  toDos: IItem[];
  onRemoveTodo: (id: string) => void;
}

const ToDoListFC: React.FC<IProps> = (props) => {
  return (
    <div>
      <ul>
        {props.toDos.map((item) => {
          return <li key={item.id}>{item.title}
          <button onClick={()=>props.onRemoveTodo(item.id)
            // onclick={props.onRemoveTodo.bind(this, item.id)}
        }>Delete</button>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default ToDoListFC;
