import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const form = useRef<HTMLFormElement>(null);

  const validateEmail = (email: string) => {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current!, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: '', message: '' });

    // Get form values directly from the form ref
    const formElements = form.current?.elements;
    const userName = (formElements?.namedItem('user_name') as HTMLInputElement)?.value;
    const userEmail = (formElements?.namedItem('user_email') as HTMLInputElement)?.value;
    const message = (formElements?.namedItem('message') as HTMLTextAreaElement)?.value;

    // Validation
    if (!userName || !userEmail || !message) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill in all fields'
      });
      setIsLoading(false);
      return;
    }

    if (!validateEmail(userEmail)) {
      setSubmitStatus({
        type: 'error',
        message: 'Please enter a valid email address'
      });
      setIsLoading(false);
      return;
    }

    // Send email using EmailJS
    try {
      if (form.current) {
        console.log('Sending form with:', {
          serviceId: 'service_vsf9ffn',
          templateId: 'template_erpjeup',
          publicKey: 'TwXdQsuRIrSswG188'
        });
    
        const result = await emailjs.sendForm(
          'service_vsf9ffn',    
          'template_erpjeup',   
          form.current,
          'TwXdQsuRIrSswG188'   
        );
    
        console.log('EmailJS send result:', result);
    
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your message! We\'ll get back to you soon.'
        });
    
        form.current.reset();
      }
    } catch (error) {
      console.error('EmailJS send error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-12 px-4">
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-purple-600 mb-2">Contact us</h2>
          <p className="text-gray-600">
            Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
        
        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              name="user_name"
              type="text"
              className="w-full p-3 rounded-lg bg-purple-50 border border-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-600"
              disabled={isLoading}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="user_email"
              type="email"
              placeholder="john@example.com"
              className="w-full p-3 rounded-lg bg-purple-50 border border-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-600"
              disabled={isLoading}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message here..."
              className="w-full p-3 rounded-lg bg-purple-50 border border-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-600"
              rows={4}
              disabled={isLoading}
              required
            />
          </div>

          {submitStatus.message && (
            <div className={`p-4 rounded-lg ${
              submitStatus.type === 'error' 
                ? 'bg-red-50 text-red-700 border border-red-200' 
                : 'bg-green-50 text-green-700 border border-green-200'
            }`}>
              {submitStatus.message}
            </div>
          )}

          <button
            type="submit"
            className={`w-full bg-purple-600 text-white py-3 px-4 rounded-lg transition-colors
              ${isLoading 
                ? 'opacity-70 cursor-not-allowed' 
                : 'hover:bg-purple-700'
              }`}
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;