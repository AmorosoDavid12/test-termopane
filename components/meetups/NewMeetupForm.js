import { useRef, useState, useEffect } from 'react';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm(props) {
  ////////////////Capcha//////////////
  const [captcha, setCaptcha] = useState('');
  const [userCaptcha, setUserCaptcha] = useState('');
  const [captchaError, setCaptchaError] = useState('');
  const [RequestSent, setRequestSent] = useState('');

  // Generate a new CAPTCHA when the component mounts
  useEffect(() => {
    generateCaptcha();
  }, []);

  // Function to generate a new CAPTCHA
  const generateCaptcha = () => {
    const captcha = Math.random().toString(36).substring(2, 4).toUpperCase();
    setCaptcha(captcha);
  };

  // Function to validate the CAPTCHA
  const validateCaptcha = () => {
    if (userCaptcha !== captcha) {
      console.log(userCaptcha, captcha)
      setCaptcha(prevCaptcha => {
        const newCaptcha = Math.random().toString(36).substring(2, 4).toUpperCase();
        if (userCaptcha !== newCaptcha) {
          const errorMessage = <label style={{ color: 'red' }} htmlFor='captcha'>Codice errato</label>
          setCaptchaError(errorMessage)
          setUserCaptcha('');
        }
        return newCaptcha;
      });
      return false
    }
    setCaptchaError('')
    return true
  };
  //////////////////////////////
  const NomeInputRef = useRef();
  const CognomeInputRef = useRef();
  const phoneInputRef = useRef();
  const EmailInputRef = useRef();
  const descriptionInputRef = useRef();

  ///////////////send data api function /////////////////
  async function onAddMeetup(FormData) {

    console.log(FormData)
    const respose = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(FormData),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const data = await respose.json()

    if (respose.ok) {
      setRequestSent(<div className={classes.eseguito}>
        {data.message}</div>)
        /// cleaning inputs
      generateCaptcha()
      setUserCaptcha('')
      NomeInputRef.current.value = '';
      CognomeInputRef.current.value = '';
      phoneInputRef.current.value = '';
      EmailInputRef.current.value = '';
      descriptionInputRef.current.value = '';

    } else {
      setRequestSent(<div style={{ color: '#f00' }} className={classes.eseguito}>{data.message}</div>)
    }
    console.log(data)
  }

  function submitHandler(event) {
    event.preventDefault();
    validateCaptcha()
    if (validateCaptcha() !== true) {
      return
    }
    const enteredNome = NomeInputRef.current.value;
    const enteredCognome = CognomeInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredEmail = EmailInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    //////////////////Date object//////////
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1; // JavaScript months are 0-11
    const year = now.getFullYear();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    ///////////////Form Data//////////
    const FormData = {
      produsul:props.product,
      Nome: enteredNome,
      Cognome: enteredCognome,
      Telefono: enteredPhone,
      email: enteredEmail,
      description: enteredDescription,
      EmailTrimis: 'NU INCA',
      Data: `${day}-${month}-${year}, ${hour}:${minutes}`
    };

    ///////////////send data/////////////////
    setRequestSent(<div style={{ color: '#3E50E5' }} className={classes.eseguito}>
      Inviando richiesta...</div>)
    onAddMeetup(FormData);


  }

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.description}>
          <h2>Richiedi un'offerta ONLINE e riceverai una
            risposta in meno di 3 giorni lavorativi!</h2>
          <p>Dichiaro di aver fornito dati personali allo scopo di ottenere
            informazioni personalizzate sui prodotti o soluzioni che commercializziamo
            e accetto che i miei dati personali vengano elaborati allo scopo di rispondere
            alla mia richiesta. Fornendo i miei dati personali, accetto che
            Ideal-House.it monitori la risposta alla mia richiesta e esprimo il mio consenso all’uso dei miei dati per l’analisi, studi di mercato, per determinare
            il grado di soddisfazione e migliorare le nostre attività, prodotti o servizi.</p>
        </div>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.row}>
            <div className={classes.control}>
              <label htmlFor='title'>Nome  *</label>
              <input type='text' required id='firstName' ref={NomeInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor='title'>Cognome *</label>
              <input type='text' required id='lastName' ref={CognomeInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor='phone'>Telefono *</label>
              <input type='tel' required id='phone' ref={phoneInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor='email'>E-mail *</label>
              <input type='email' required id='email' ref={EmailInputRef} />
            </div>

          </div>
          <div className={classes['control-description']}>
            <label htmlFor='description'>Descrizione *</label>
            <textarea
              id='description'
              required
              rows='5'
              ref={descriptionInputRef}
            ></textarea>
          </div>
          <div className={classes['control-captcha']}>
            <div className={classes.star} >*</div>
            <div className={classes.captcha}
              style={{ backgroundImage: 'url(/noisy-background_1194-7547.jpg)' }}>
              {captcha}
            </div>
            <input
              type='text'
              required
              id='captcha'
              value={userCaptcha}
              onChange={(e) => setUserCaptcha(e.target.value)}
            />
            {captchaError}
          </div>
          <div className={classes.actions}>
            <button type='submit'>Manda una richiesta</button>
          </div>
          {RequestSent}
        </form>
      </div>
  
    </>
  );
}

export default NewMeetupForm;
