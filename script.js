/* -------------------------- pick the Element ------------------------- */
const $ = (id) => {
  if (document.getElementById(id) !== null) return document.getElementById(id);
  else if (document.getElementsByTagName(id).length !== 0)
    return document.getElementsByTagName(id);
  else if (document.getElementsByClassName(id).length !== 0)
    return document.getElementsByClassName(id);
};
/* --------------------------------------------------------------------- */
/* --------------------- create and add an element --------------------- */
const create = (type, parent, id, text, tailwind) => {
  const element = document.createElement(type);
  element.innerText = text;
  element.setAttribute("id", id);
  element.classList = tailwind;
  $(parent).appendChild(element);
};

/* --------------------------------------------------------------------- */
/*                         Beginning the tasklist                        */
/* --------------------------------------------------------------------- */

create(
  "h1",
  "root",
  "heading",
  "My Daily Task List",
  "text-center font-semibold text-3xl m-10 border-b-2 border-black"
);
create(
  "input",
  "root",
  "inputField",
  "",
  "border-black border-2 text-center rounded-xl h-16 w-2/3 block mx-auto"
);
create(
  "button",
  "root",
  "addTask",
  "Add Task",
  "text-white font-semibold bg-green-500 px-4 py-2 rounded-lg block mx-auto m-4 hover:ring-2 ring-green-900"
);

create("div", "root", "taskContainer", "", "container mx-auto");
/* --------------------------------------------------------------------- */

var taskId = 1000;
$("addTask").addEventListener("click", () => {
  let value = $("inputField").value;
  if (value == "") return;
  $("inputField").value = "";
  create(
    "li",
    "taskContainer",
    "id" + taskId,
    null,
    "text-3xl flex justify-between my-1"
  );
  create("span", "id" + taskId, null, value, null);
  create("span", "id" + taskId, "icons" + taskId, null, "space-x-10");
  create(
    "i",
    "icons" + taskId,
    null,
    null,
    "fa-solid fa-circle-minus cursor-pointer transition-all text-red-600 p-7 hover:animate-bounce "
  );
  create(
    "i",
    "icons" + taskId,
    null,
    null,
    "fa-solid fa-circle-check cursor-pointer transition-all text-green-600  p-7 hover:animate-bounce "
  );

  taskId++;
});
