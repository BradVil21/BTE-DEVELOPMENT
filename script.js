document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const confirmation = document.getElementById('confirmation');

  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      const formData = new FormData(form);
      const name = formData.get('name').trim();
      const message = formData.get('message').trim();

      if (!name || !message) {
        alert('Please fill in all fields.');
        return;
      }

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          headers: {
            'Accept': 'application/json'
          },
          body: formData
        });

        if (response.ok) {
          confirmation.style.display = 'block';
          form.reset();

          setTimeout(() => {
            confirmation.style.display = 'none';
          }, 3000);
        } else {
          alert('Something went wrong. Please try again.');
        }
      } catch (error) {
        console.error('Form submission error:', error);
        alert('Error submitting form.');
      }
    });
  }

  window.addEventListener('load', () => {
    document.body.classList.add('loaded');
  });

  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }
});


  // === TESTIMONIAL FORM HANDLER ===
  document.addEventListener('DOMContentLoaded', function () {
    const testimonialForm = document.getElementById('testimonialForm');
    const testimonialConfirmation = document.getElementById('confirmation');

    if (testimonialForm) {
      testimonialForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const formData = new FormData(testimonialForm);
        const name = formData.get('name').trim();
        const testimonial = formData.get('testimonial').trim();

        if (!name || !testimonial) {
          alert('Please fill in all fields.');
          return;
        }

        try {
          const response = await fetch(testimonialForm.action, {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            body: formData
          });

          if (response.ok) {
            testimonialConfirmation.style.display = 'block';
            testimonialForm.reset();
            setTimeout(() => {
              testimonialConfirmation.style.display = 'none';
            }, 3000);
          } else {
            alert('Something went wrong. Please try again.');
          }
        } catch (error) {
          console.error('Form submission error:', error);
          alert('Error submitting form.');
        }
      });
    }

    // Optional: AOS + body class loader (if used)
    window.addEventListener('load', () => {
      document.body.classList.add('loaded');
    });

    if (typeof AOS !== 'undefined') {
      AOS.init({ duration: 1000, once: true });
    }
  });


