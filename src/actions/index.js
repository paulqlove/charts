/*  eslint no-undef: "off" */
export var itemsHasErrored = function(bool) {
    return {
        type: "ITEMS_HAS_ERRORED",
        hasErrored: bool
    };
};

export var itemsIsLoading = function(bool) {
    return {
        type: "ITEMS_IS_LOADING",
        isLoading: bool
    };
};

export var itemsFetchDataSuccess = function(items) {
    return {
        type: "ITEMS_FETCH_DATA_SUCCESS",
        items
    };
};

export var itemsFetchData = function(url){

    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetch(url,{
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            credentials: "same-origin"})
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));
                return response;
            }).then((resp) => resp.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
};
// export var itemsHasErrored = function(bool) {
//     const action = {
//         type: "ITEMS_HAS_ERRORED",
//         itemsHasErrored: bool
//     };
//     return action;
// };
