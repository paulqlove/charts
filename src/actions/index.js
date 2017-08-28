/*eslint no-undef: "warn"*/
// export function itemsHasErrored(bool) {
//     return {
//         type: 'ITEMS_HAS_ERRORED',
//         hasErrored: bool
//     };
// }
export function itemsHasErrored(bool) {
  const action = {
    type: 'ITEMS_HAS_ERRORED',
    itemsHasErrored: bool
  };
  return action;
}
