import { parse } from "acorn";
import { full } from "acorn-walk";

const textInput = document.createElement("input");
textInput.type = "text";
document.body.appendChild(textInput);
const astList = document.createElement("ul");
document.body.appendChild(astList);

textInput.value = "1 + 2 * 3 - 4";

function update() {
  astList.innerHTML = "";
  const ast = parse(textInput.value, { ecmaVersion: 2020 });
  const ulStack = [astList];
  full(ast, (node) => {
    // if (node.type !== "BinaryExpression") return;
    const li = document.createElement("li");
    li.textContent = `${node.type}: (${node.start}-${node.end})`;
    ulStack[ulStack.length - 1].appendChild(li);
  });
}
update();
textInput.addEventListener("input", update);
