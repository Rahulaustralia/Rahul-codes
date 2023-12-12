import { DEL, TOGGLE } from "./ActionConstent";

function delAction(id) {
  return { type: DEL, payload: id };
}
function toggler() {
  return { type: TOGGLE };
}
export { delAction, toggler };
