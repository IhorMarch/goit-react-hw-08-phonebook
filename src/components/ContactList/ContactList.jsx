import { List,Item } from './ContactList.styled';
// Импортируем хук
import { useSelector } from "react-redux";
import { Contact } from '../Contact/Contact';
import { Section } from '../Section/Section';
import { selectVisibleContacts} from "../../redux/selectors";
 

 

export const ContactList = () => {
  
// Получаем массив задач из состояния Redux
 
  const visibleContacts = useSelector(selectVisibleContacts);

  
// Вычисляем массив задач которые необходимо отображать в интерфейсе

  return (
    <Section>
     <List>
    {visibleContacts.map(contact => (
      <Item key={contact.id}>
         <Contact contact={contact} />
      </Item>
    
    ))}
      </List>
    </Section>
  )



}
  
 
 
  

