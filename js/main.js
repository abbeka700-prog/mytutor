/* ===================================================================
   MyTutor — shared behaviors
   =================================================================== */

/* Mobile nav toggle */
function initNav(){
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if(!toggle || !links) return;
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', links.classList.contains('open'));
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
  document.addEventListener('click', (e) => {
    if(!links.classList.contains('open')) return;
    if(!links.contains(e.target) && !toggle.contains(e.target)) links.classList.remove('open');
  });
}

 
function avatarHTML(entity, className, extraHTML){
  extraHTML = extraHTML || '';
  const name = entity.name || 'Person';
  const src = entity.photo || '';
  return `<div class="${className} avatar-ph">
    <svg class="avatar-ph-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="1.8"/><path d="M4 20c0-3.5 3.5-6 8-6s8 2.5 8 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
    <img src="${src}" alt="${name}" class="avatar-photo" loading="lazy" onload="this.classList.add('loaded')" onerror="this.remove()">
    ${extraHTML}
  </div>`;
}

/* Star string generator, e.g. starString(4.5) -> "★★★★☆" */
function starString(rating){
  const full = Math.round(rating);
  return '★'.repeat(full) + '☆'.repeat(5 - full);
}

/* Toast */
let toastTimer = null;
function showToast(message){
  let toast = document.querySelector('.toast');
  if(!toast){
    toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span class="t-dot"></span><span class="t-msg"></span>`;
    document.body.appendChild(toast);
  }
  toast.querySelector('.t-msg').textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
}

/* Password field show/hide toggle */
function initPasswordToggles(){
  document.querySelectorAll('.password-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = btn.parentElement.querySelector('input');
      if(!input) return;
      const isPw = input.type === 'password';
      input.type = isPw ? 'text' : 'password';
      btn.textContent = isPw ? 'Hide' : 'Show';
    });
  });
}

/* Generic required-field form validation.
   Adds .has-error to invalid .field wrappers, returns true if all valid. */
function validateForm(form){
  let valid = true;
  form.querySelectorAll('[data-required]').forEach(input => {
    const field = input.closest('.field');
    const filled = input.type === 'checkbox' ? input.checked : input.value.trim().length > 0;
    if(!filled){
      valid = false;
      field && field.classList.add('has-error');
    } else {
      field && field.classList.remove('has-error');
    }
  });
  return valid;
}

function clearErrorsOnInput(form){
  form.querySelectorAll('[data-required]').forEach(input => {
    input.addEventListener('input', () => {
      const field = input.closest('.field');
      field && field.classList.remove('has-error');
    });
  });
}

/* Upload drag & drop preview */
function initUploadDrop(){
  const drop = document.querySelector('.upload-drop');
  if(!drop) return;
  const input = drop.querySelector('input[type=file]');
  const label = drop.querySelector('span');
  const icon = drop.querySelector('.u-icon');
  const defaultText = label ? label.textContent : '';

  const showFile = (file) => {
    if(!file) return;
    if(label) label.textContent = file.name;
    if(icon) icon.textContent = '✓';
  };

  drop.addEventListener('click', () => input && input.click());
  input && input.addEventListener('change', () => showFile(input.files[0]));

  ['dragover','dragenter'].forEach(evt => drop.addEventListener(evt, (e) => {
    e.preventDefault(); drop.classList.add('dragover');
  }));
  ['dragleave','drop'].forEach(evt => drop.addEventListener(evt, (e) => {
    e.preventDefault(); drop.classList.remove('dragover');
  }));
  drop.addEventListener('drop', (e) => {
    if(e.dataTransfer.files.length && input){
      input.files = e.dataTransfer.files;
      showFile(e.dataTransfer.files[0]);
    }
  });
}

/* Role switch (Student / Tutor) used on register page */
function initRoleSwitch(){
  const switcher = document.querySelector('.role-switch');
  if(!switcher) return;
  const buttons = switcher.querySelectorAll('button');
  const tutorOnlyFields = document.querySelectorAll('[data-role="tutor"]');

  const applyRole = (role) => {
    buttons.forEach(b => b.classList.toggle('active', b.dataset.role === role));
    tutorOnlyFields.forEach(f => f.style.display = role === 'tutor' ? '' : 'none');
    const heading = document.querySelector('[data-role-heading]');
    if(heading) heading.textContent = role === 'tutor' ? 'Become a Tutor' : 'Register Now';
  };

  buttons.forEach(b => b.addEventListener('click', () => applyRole(b.dataset.role)));

  const params = new URLSearchParams(location.search);
  applyRole(params.get('role') === 'tutor' ? 'tutor' : 'student');
}

 
function initScrollReveal(){
  const selector = [
    '.course-card', '.tutor-card', '.panel', '.testi-card', '.list-row',
    '.value-card', '.profile-card', '.sidebar-card', '.contact-form-card',
    '.contact-info-card', '.stat-item', '.review-item'
  ].join(', ');
  const els = document.querySelectorAll(selector);
  if(!els.length) return;

  if(!('IntersectionObserver' in window)){
    els.forEach(el => el.classList.add('in-view'));
    return;
  }

  els.forEach((el) => {
    const idx = Array.prototype.indexOf.call(el.parentElement.children, el);
    el.classList.add('reveal-el');
    el.style.transitionDelay = (Math.min(idx % 5, 5) * 0.07) + 's';
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  els.forEach(el => io.observe(el));
}

/* Animated count-up for stat numbers like "5,000+" or "95%" */
function animateCount(el){
  const target = parseFloat(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const duration = 1100;
  const start = performance.now();

  function tick(now){
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased);
    el.textContent = value.toLocaleString() + suffix;
    if(progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function initCounters(){
  const nums = document.querySelectorAll('.stat-num');
  if(!nums.length || !('IntersectionObserver' in window)) return;

  nums.forEach(el => {
    const raw = el.textContent.trim();
    const match = raw.match(/[\d,.]+/);
    if(!match) return;
    const target = parseFloat(match[0].replace(/,/g, ''));
    const suffix = raw.slice(match.index + match[0].length);
    el.dataset.target = target;
    el.dataset.suffix = suffix;
    el.textContent = '0' + suffix;
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting && entry.target.dataset.target){
        animateCount(entry.target);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  nums.forEach(el => io.observe(el));
}

/* Floating scroll-to-top button, injected once per page */
function initScrollTop(){
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'scroll-top-btn';
  btn.setAttribute('aria-label', 'Scroll back to top');
  btn.textContent = '↑';
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 520);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initPasswordToggles();
  initUploadDrop();
  initRoleSwitch();
  initScrollReveal();
  initCounters();
  initScrollTop();
});
