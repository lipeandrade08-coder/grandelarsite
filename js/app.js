/**
 * Grande Lar Móveis Taubaté — Design System Kaleo (Black Friday Até 70% OFF)
 * Scroll-reveal (GPU composited), rolagem lateral suave, popup Black Friday e Lightbox de produtos.
 */
(function () {
  'use strict';

  var WA_NUMBER = '5512992606661';
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ── 1. Reveal suave para seções e cards (Estilo Kaleo) ──────────────────────
  if (reducedMotion) {
    document
      .querySelectorAll('.section, .profile, .photo-card, .plan-card, .review-card, .kids-card')
      .forEach(function (el) {
        el.classList.add('is-visible');
      });
  } else {
    var sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            sectionObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    );

    document.querySelectorAll('.section, .profile').forEach(function (el) {
      sectionObserver.observe(el);
    });

    var CARD_STAGGER_MS = 60;
    var CARD_SELECTOR = '.photo-card, .plan-card, .review-card, .kids-card';

    var cardObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var cards = entry.target.querySelectorAll(CARD_SELECTOR);
            cards.forEach(function (card, i) {
              card.style.transitionDelay = i * CARD_STAGGER_MS + 'ms';
              card.classList.add('is-visible');
              card.addEventListener(
                'transitionend',
                function () {
                  card.style.transitionDelay = '0ms';
                },
                { once: true }
              );
            });
            cardObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.04 }
    );

    document.querySelectorAll('.slider').forEach(function (slider) {
      cardObserver.observe(slider);
    });
  }

  // ── 2. Popup Black Friday Até 70% OFF (Estilo Kaleo) ────────────────────────
  var overlay = document.getElementById('popup-unidade');
  var btnClose = document.getElementById('popup-close');
  var btnCta = document.getElementById('popup-cta-btn');
  var btnMap = document.getElementById('popup-cta-map');

  function fecharPopup() {
    if (!overlay || !overlay.classList.contains('popup-visible')) return;
    overlay.classList.add('popup-hiding');
    setTimeout(function () {
      overlay.classList.remove('popup-visible', 'popup-hiding');
    }, 350);
  }

  if (overlay && window.location.search.indexOf('nopopup=1') === -1) {
    setTimeout(function () {
      overlay.classList.add('popup-visible');
    }, 600);

    if (btnClose) btnClose.addEventListener('click', fecharPopup);
    if (btnCta) btnCta.addEventListener('click', fecharPopup);
    if (btnMap) btnMap.addEventListener('click', fecharPopup);

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) fecharPopup();
    });
  }

  // ── 3. Botões de Navegação Lateral (< e >) + Arraste no Mouse ───────────────
  document.querySelectorAll('[data-slider-prev]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var targetId = btn.getAttribute('data-slider-prev');
      var slider = document.getElementById(targetId);
      if (!slider) return;
      var cardWidth = slider.querySelector('.plan-card, .photo-card, .kids-card')?.offsetWidth || 300;
      slider.scrollBy({ left: -(cardWidth + 16), behavior: 'smooth' });
    });
  });

  document.querySelectorAll('[data-slider-next]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var targetId = btn.getAttribute('data-slider-next');
      var slider = document.getElementById(targetId);
      if (!slider) return;
      var cardWidth = slider.querySelector('.plan-card, .photo-card, .kids-card')?.offsetWidth || 300;
      slider.scrollBy({ left: cardWidth + 16, behavior: 'smooth' });
    });
  });

  // Suporte a arrastar com o mouse no desktop sem atrapalhar o toque no mobile
  var isDraggingSlider = false;
  var dragMovedDistance = 0;

  document.querySelectorAll('.slider').forEach(function (slider) {
    var startX = 0;
    var scrollLeft = 0;
    var isDown = false;

    slider.addEventListener('mousedown', function (e) {
      isDown = true;
      isDraggingSlider = false;
      dragMovedDistance = 0;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', function () {
      isDown = false;
      slider.classList.remove('is-dragging');
    });

    slider.addEventListener('mouseup', function () {
      isDown = false;
      slider.classList.remove('is-dragging');
    });

    slider.addEventListener('mousemove', function (e) {
      if (!isDown) return;
      var x = e.pageX - slider.offsetLeft;
      var walk = (x - startX) * 1.4;
      dragMovedDistance = Math.abs(walk);
      if (dragMovedDistance > 8) {
        isDraggingSlider = true;
        slider.classList.add('is-dragging');
        e.preventDefault();
        slider.scrollLeft = scrollLeft - walk;
      }
    });
  });

  // ── 4. Lightbox de Visualização de Produto ao Tocar no Card ─────────────────
  var lightbox = document.getElementById('product-lightbox');
  var lightboxImg = document.getElementById('lightbox-img');
  var lightboxTitle = document.getElementById('lightbox-title');
  var lightboxDesc = document.getElementById('lightbox-desc');
  var lightboxWaBtn = document.getElementById('lightbox-wa-btn');
  var lightboxClose = document.getElementById('lightbox-close');

  function openLightbox(title, subtitle, imgSrc) {
    if (!lightbox) return;
    lightboxImg.src = imgSrc;
    lightboxImg.alt = title;
    lightboxTitle.textContent = title;
    lightboxDesc.textContent = subtitle;
    var msg =
      'Olá! Vi o modelo "' +
      title +
      '" no site da Grande Lar Móveis e quero aproveitar o desconto de até 70% da Black Friday!';
    lightboxWaBtn.href = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg);
    lightbox.classList.add('is-open');
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('is-open');
  }

  document.querySelectorAll('.plan-card, .photo-card, .kids-card').forEach(function (card) {
    card.addEventListener('click', function () {
      if (isDraggingSlider && dragMovedDistance > 10) return;
      var title = card.getAttribute('data-title') || card.querySelector('strong')?.textContent || 'Modelo Grande Lar';
      var subtitle =
        card.getAttribute('data-subtitle') ||
        card.querySelector('span:last-child')?.textContent ||
        'Black Friday Até 70% OFF';
      var img = card.getAttribute('data-img') || card.querySelector('img')?.getAttribute('src');
      if (img) {
        openLightbox(title, subtitle, img);
      }
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      fecharPopup();
      closeLightbox();
    }
  });

  // ── 5. Pausa o vídeo do espaço quando sair da tela ──────────────────────────
  var espacoVideo = document.getElementById('espaco-video');
  if (espacoVideo) {
    var videoObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            espacoVideo.play().catch(function () {});
          } else {
            espacoVideo.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    videoObserver.observe(espacoVideo);
  }
})();
