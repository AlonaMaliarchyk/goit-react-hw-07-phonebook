import { useState } from "react";
import InitialState from './initialState.js';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/operations";
import { selectContacts } from "redux/selector.js";
const ContactForm = () => {
    const dispatch = useDispatch();
    const [, setState] = useState({ ...InitialState });
    const contacts = useSelector(selectContacts);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.elements.name.value;
        const number = form.elements.number.value;
        const isExists = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());
        if (isExists) {
            alert(name + ' is already in contacts');
            return;
        }
        dispatch(addContact({ name: name, phone: number }));
        form.reset();
    }

    const handlerChange = ({target}) => {
        const { name, value } = target;
        setState(prevState => {
            return {...prevState, [name]: value}
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name </label>
                    <input className={css.input}
                    type="text"
                    onChange={handlerChange}
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <label>
                    Number
                </label>
                    <input className={css.input}
                    type="tel"
                    onChange={handlerChange}
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
                <button className={css.addBtn} type="submit">Add contact</button>
        </form>
    )
}

export default ContactForm;

