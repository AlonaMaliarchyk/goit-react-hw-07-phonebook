import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactItem from "../ContactItem";
import { fetchContacts } from "../../redux/operations";
import { selectFilteredContacts } from "redux/selector";

const ContactList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    },
        [dispatch]
    );

    const contacts = useSelector(selectFilteredContacts);
    return (
    <div>
        <ol>
            {contacts.map((contact) => (
                <ContactItem
                    key={contact.id}
                    id={contact.id}
                    name={contact.name}
                    number={contact.phone} />
            ))}
        </ol>
    </div>
    )
}

export default ContactList;
