/**
 * RideShare Saver — Minimal Vanilla JavaScript Client
 * Unit: SIT726 Task 6.2C
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Materialize Sidenav
  const sidenavs = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenavs, { edge: 'right' });

  // Initialize Materialize Modal
  const modals = document.querySelectorAll('.modal');
  M.Modal.init(modals, { dismissible: true });

  // Initialize Waitlist Form
  initWaitlist();
});

function initWaitlist() {
  const form = document.getElementById('waitlistForm');
  const formView = document.getElementById('waitlistFormView');
  const successView = document.getElementById('waitlistSuccessView');
  const submitBtn = document.getElementById('submitWaitlistBtn');
  const positionEl = document.getElementById('waitlistPositionNumber');
  const resetBtn = document.getElementById('resetWaitlistBtn');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('waitlistName').value.trim();
    const email = document.getElementById('waitlistEmail').value.trim();

    if (!name || !email) {
      M.toast({ html: 'Please enter your name and email.', classes: 'red darken-1' });
      return;
    }

    // Button loading feedback
    submitBtn.disabled = true;
    submitBtn.textContent = 'Saving Spot...';

    setTimeout(() => {
      const ticketNum = Math.floor(Math.random() * 50) + 120;
      if (positionEl) positionEl.textContent = `#${ticketNum}`;

      if (formView) formView.style.display = 'none';
      if (successView) successView.style.display = 'block';

      submitBtn.disabled = false;
      submitBtn.textContent = 'Secure My Early Access';

      M.toast({ html: '🎉 You are on the waitlist!', classes: 'green darken-1' });
    }, 400);
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      form.reset();
      if (formView) formView.style.display = 'block';
      if (successView) successView.style.display = 'none';
    });
  }
}
