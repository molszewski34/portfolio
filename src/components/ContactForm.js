// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("mpznqobq");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }




  return (
      <form className='flex flex-col gap-3 w-full max-w-xs'
       onSubmit={handleSubmit}>
      {/* <label
      className='text-white hidden sm:flex'
      htmlFor="email">
        Email Address
      </label> */}
      <input className='text-white'
        id="email"
        type="email" 
        name="email"
        placeholder='Email adress'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        className='text-area-height text-white'
        placeholder='Contact me...'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button role="button" type="submit" disabled={state.submitting} className="bg-blue-500 text-white p-3 font-semibold rounded-md   hover:bg-opacity-90">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
