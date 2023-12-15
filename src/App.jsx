import {Provider} from "react-redux";
import {store} from "./app/store";
import Players from "./features/players/Players";

// Root component for the application
function App() {
    return (
        <Provider store={store}>
            <Players />
        </Provider>
    );
}

export default App;
