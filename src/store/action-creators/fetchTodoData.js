import { setTodoList } from "./setTodoList";
import { setIsLoading } from "./setIsloading";

export const fetchTodoData = () => {
    return (dispatch) => {
        dispatch(setIsLoading(true));
		return fetch('http://localhost:3005/todos')
			.then((response) => response.json())
			.then((loadedTodos) => dispatch(setTodoList(loadedTodos)))
			.catch((error) => dispatch({ type: 'ERROR_LOADING_TODO_DATA', error }))
			.finally(() => dispatch(setIsLoading(false)));
    }
}