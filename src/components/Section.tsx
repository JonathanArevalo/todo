import "../styles/style.scss";
import { TareaA } from "../types/Tarea";

interface Props {
  tareas: TareaA[];
  buttonTask: string;
  deletTask: (id: number) => void;
}
const Section = ({ tareas, deletTask, buttonTask }: Props) => {
  return (
    <div className="todo-list">
      {tareas.map((tarea: TareaA) => {
        return (
          <div className="task">
            <input type="checkbox" />
            <label>{tarea.title}</label>
            <button className="button_add taskButton" onClick={() => deletTask(tarea.id)}>
              {buttonTask}
            </button>
            <div className="custom-hr"></div>
          </div>
        );
      })}
    </div>
  );
};

export default Section;
