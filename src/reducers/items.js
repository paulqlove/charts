export var itemsHasErrored = function(state = false, action) {
    switch (action.type) {
    case "ITEMS_HAS_ERRORED":
        return action.hasErrored;

    default:
        return state;
    }
};

export var itemsIsLoading = function(state = false, action) {
    switch (action.type) {
    case "ITEMS_IS_LOADING":
        return action.isLoading;

    default:
        return state;
    }
};

export var items = function(state = [], action) {
    switch (action.type) {
    case "ITEMS_FETCH_DATA_SUCCESS":
        return action.items;

    default:
        return state;
    }
};
