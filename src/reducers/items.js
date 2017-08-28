/*eslint no-undef: "warn"*/
export function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action;
        default:
            return state;
    }
}
