import React, { useEffect } from 'react';

const HubSpotForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      if ((window as any).hbspt) {
        (window as any).hbspt.forms.create({
          region: "eu1",
          portalId: "143927153",
          formId: "840f4d63-2d82-40c1-a76d-5920cf9dd81d",
          target: '#hubspotForm',
          formInstanceId: 'contact-form',
          css: '',
          cssClass: 'hs-custom-form',
          submitButtonClass: 'hs-submit-btn',
          errorClass: 'hs-error',
          errorMessageClass: 'hs-error-msg',
          inlineMessage: 'Thanks for submitting the form.',
          onFormReady: () => {
            console.log('HubSpot Form ready');
          },
          onFormSubmit: () => {
            console.log('Form submitted');
          }
        });
      }
    });

    return () => {
      // Clean up script
      const existingScript = document.querySelector('script[src="https://js.hsforms.net/forms/v2.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
      
      // Clean up form
      const formContainer = document.getElementById('hubspotForm');
      if (formContainer) {
        formContainer.innerHTML = '';
      }
    };
  }, []);

  return (
    <div id="hubspotForm" className="hubspot-form-container">
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading form...</p>
      </div>
    </div>
  );
};

export default HubSpotForm;