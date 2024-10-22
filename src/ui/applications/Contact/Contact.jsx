import style from './Contact.module.css';

import emailjs from '@emailjs/browser';

import { useContext, useRef, useState } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext/LanguageContext';


const Contact = () => {
  const { t } = useContext(LanguageContext);
  const [sent, setSent] = useState(false)
  const form = useRef()


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSent(true)
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  
  return (
    <div className={` ${style.Contact} application`}>

      <div className={style.mainText}>
        {/* <h2>Contact</h2> */}
        <p>Got <strong>feedback</strong>?</p>
        <p>Spotted a <strong>bug</strong>?</p>
        <p>Just want to <strong>get in touch</strong>?</p>
        <p>Send me a <strong>message</strong>!</p>
      </div>
      <div className={style.wrapperContact}>
        {/* <h1>Dev Fabrício Dag</h1>
        <p>{t('underDevelopment')}</p> */}

        {!sent?(
          <form ref={form} onSubmit={sendEmail}>
            <div className={style.inputWrapper}>
              <label>Name</label>
              <input type="text" name="user_name" placeholder='ex. Fabrício DAgostini' />
            </div>
            
            <div className={style.inputWrapper}>
              <label>Email</label>
              <input type="email" name="user_email" placeholder='ex. devfabriciodag@gmail.com' />
            </div>

            <div className={style.inputWrapper}>
              <label>Message</label>
              <textarea name="message" />
            </div>
                       
            <input className={style.submitButton} type="submit" value="Send" />
        </form>
        ):
        (
          <h1>enviado</h1>
        )}
      </div>
    </div>
  );
};

export { Contact };
