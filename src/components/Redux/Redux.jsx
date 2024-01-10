import Counter from "./Pembahasan/Counter";
import { Provider } from "react-redux";
import store from "../../app/Store.js";

const Redux = () => {
  return (
    <>
      <Provider store={store}>
        <Counter />
      </Provider>
    </>
  );
};

export default Redux;
