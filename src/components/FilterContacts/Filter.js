import { useDispatch } from "react-redux";
import { setStatusFilter } from "../../redux/filtersSlice";
import css from './Filter.module.css';


const Filter = () => {
    const dispatch = useDispatch();
    const setFilter = (filter) => {
        dispatch(setStatusFilter(filter));
    }
    return (
        <div className={css.filterWrap}>
           <label>Find a contact by name </label>
            <input className={css.input}
                type="text"
                onChange={(event)=>setFilter(event.target.value)}
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
        </div>
    )
}

export default Filter;
