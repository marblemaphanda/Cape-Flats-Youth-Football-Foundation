// Placeholder for Part 3 (interactivity, validation, etc.).
// Accordion example (activate if you add .acc elements):
document.querySelectorAll('.acc').forEach(btn => {
  btn.addEventListener('click', () => {
    const panel = btn.nextElementSibling;
    panel.hidden = !panel.hidden;
  });
});

// Simple search/filter example (activate if #q and #list exist):
const q = document.getElementById('q');
if (q) {
  const items = Array.from(document.querySelectorAll('#list li'));
  q.addEventListener('input', () => {
    const s = q.value.toLowerCase();
    items.forEach(li => li.style.display = li.textContent.toLowerCase().includes(s) ? '' : 'none');
  });
}


// Enquiry form friendly reply
const ef = document.getElementById('enquiryForm');
if (ef) {
  ef.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!ef.checkValidity()) { ef.reportValidity(); return; }
    const d = Object.fromEntries(new FormData(ef).entries());
    const reply = document.getElementById('reply');
    reply.textContent = `Thanks ${d.name}! We'll email you about "${d.topic}".`;
    ef.reset();
  });
}

// Contact form friendly reply
const cf = document.getElementById('contactForm');
if (cf) {
  cf.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!cf.checkValidity()) { cf.reportValidity(); return; }
    const d = Object.fromEntries(new FormData(cf).entries());
    const out = document.getElementById('replyContact');
    out.textContent = `Thanks ${d.name}! Your message was received. We'll reply to ${d.email}.`;
    cf.reset();
  });
}
