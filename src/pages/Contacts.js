import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';

import { ContactCounter } from '../components//ContactCounter/ContactCounter';



export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);



  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <ContactCounter/>
      <ContactForm />
      <div>{isLoading && 'Request in progress...'}</div>
      
    
      <ContactList />
    </>
  );
}