import { store } from "../redux/store";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import Filter from './FilterContacts';
import { Provider } from "react-redux";
import css from './App.module.css';
import { useSelector } from "react-redux";
import { selectIsLoading } from "../redux/selector";
import { BallTriangle } from 'react-loader-spinner';


const App = () => {
  const isLoading = useSelector(selectIsLoading);
    return (
      <Provider store={store}>
          <div className={css.spinner}>
            {isLoading && <BallTriangle className="loading"
              height={100}
              width={100}
              radius={5}
              color="#4fa94d"
              ariaLabel="ball-triangle-loading"
              wrapperClass={{}}
              wrapperStyle=""
              visible={true}
              />}
          </div>

          <div className={css.wrap} style={{ opacity: isLoading ? '0.2': '1'}}>
            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>
            <Filter />
            <ContactList />
          </div>
      </Provider>
    );
}

export default App;
