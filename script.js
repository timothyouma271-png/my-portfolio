var form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var status = document.getElementById('form-status');
    status.textContent = 'Sending...';
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(function (res) {
      if (res.ok) {
        form.reset();
        status.textContent = 'Thanks, your message was sent. I will reply by email.';
      } else {
        status.textContent = 'The message could not be sent. Please email me directly.';
      }
    }).catch(function () {
      status.textContent = 'The message could not be sent. Please email me directly.';
    });
  });
}