import "./styles.css";
import {createToDo} from "./todos";
import {createProject} from "./projects";
import {format} from "date-fns";

const studyProject = createProject("Study");
console.log(studyProject);

const studyToDo = createToDo("something", "something else", format(new Date(), "yyyy-MM-dd"), "low");

studyProject.inventory.push(studyToDo);

console.log(studyProject);