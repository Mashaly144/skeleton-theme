class FlexoraHero extends HTMLElement {
  connectedCallback() {
    if (this.initialized) return;

    this.slides = [...this.querySelectorAll('[data-hero-slide]')];
    this.dots = [...this.querySelectorAll('[data-hero-dot]')];
    this.previousButton = this.querySelector('[data-hero-previous]');
    this.nextButton = this.querySelector('[data-hero-next]');
    this.currentIndex = Math.max(
      0,
      this.slides.findIndex((slide) => slide.classList.contains('is-active'))
    );
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.isRtl = getComputedStyle(this).direction === 'rtl';
    this.handlePrevious = () => this.goTo(this.currentIndex - 1);
    this.handleNext = () => this.goTo(this.currentIndex + 1);
    this.handleKeydown = (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        this.isRtl ? this.handleNext() : this.handlePrevious();
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        this.isRtl ? this.handlePrevious() : this.handleNext();
      }
    };
    this.handleMouseEnter = () => {
      this.interactionPaused = true;
      this.pause();
    };
    this.handleMouseLeave = () => {
      this.interactionPaused = false;
      this.start();
    };
    this.handleFocusIn = () => {
      this.interactionPaused = true;
      this.pause();
    };
    this.handleFocusOut = (event) => {
      if (!this.contains(event.relatedTarget)) {
        this.interactionPaused = false;
        this.start();
      }
    };
    this.handleScroll = () => {
      if (!this.classList.contains('fx-hero--parallax') || this.reducedMotion) return;
      const bounds = this.getBoundingClientRect();
      if (bounds.bottom < 0 || bounds.top > window.innerHeight) return;
      this.style.setProperty('--fx-hero-parallax', `${Math.round(bounds.top * -0.08)}px`);
    };

    if (this.slides.length <= 1) {
      this.setAttribute('data-slider-ready', 'false');
      return;
    }

    this.previousButton?.addEventListener('click', this.handlePrevious);
    this.nextButton?.addEventListener('click', this.handleNext);
    this.dots.forEach((dot) => {
      dot.addEventListener('click', () => this.goTo(Number(dot.dataset.heroDot)));
    });
    this.addEventListener('keydown', this.handleKeydown);

    if (this.dataset.pauseOnHover === 'true') {
      this.addEventListener('mouseenter', this.handleMouseEnter);
      this.addEventListener('mouseleave', this.handleMouseLeave);
    }

    this.addEventListener('focusin', this.handleFocusIn);
    this.addEventListener('focusout', this.handleFocusOut);

    if (this.classList.contains('fx-hero--parallax') && !this.reducedMotion) {
      window.addEventListener('scroll', this.handleScroll, { passive: true });
      this.handleScroll();
    }

    this.initialized = true;
    this.setAttribute('data-slider-ready', 'true');
    this.start();
  }

  disconnectedCallback() {
    this.pause();
    this.previousButton?.removeEventListener('click', this.handlePrevious);
    this.nextButton?.removeEventListener('click', this.handleNext);
    this.removeEventListener('keydown', this.handleKeydown);
    this.removeEventListener('mouseenter', this.handleMouseEnter);
    this.removeEventListener('mouseleave', this.handleMouseLeave);
    this.removeEventListener('focusin', this.handleFocusIn);
    this.removeEventListener('focusout', this.handleFocusOut);
    window.removeEventListener('scroll', this.handleScroll);
    this.initialized = false;
  }

  goTo(index) {
    const nextIndex = (index + this.slides.length) % this.slides.length;

    this.slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === nextIndex;
      slide.classList.toggle('is-active', isActive);
      slide.setAttribute('aria-hidden', String(!isActive));
    });

    this.dots.forEach((dot, dotIndex) => {
      const isActive = dotIndex === nextIndex;
      dot.classList.toggle('is-active', isActive);
      dot.setAttribute('aria-current', String(isActive));
    });

    this.currentIndex = nextIndex;
    this.start();
  }

  start() {
    this.pause();

    if (
      this.dataset.autoplay !== 'true' ||
      this.reducedMotion ||
      this.interactionPaused ||
      this.slides.length <= 1
    ) {
      return;
    }

    const speed = Number(this.dataset.autoplaySpeed) || 5000;
    this.autoplayTimer = window.setInterval(() => this.handleNext(), speed);
  }

  pause() {
    window.clearInterval(this.autoplayTimer);
    this.autoplayTimer = undefined;
  }
}

if (!customElements.get('flexora-hero')) {
  customElements.define('flexora-hero', FlexoraHero);
}

document.addEventListener('shopify:section:load', (event) => {
  event.target.querySelector('flexora-hero')?.connectedCallback();
});

document.addEventListener('shopify:section:unload', (event) => {
  event.target.querySelector('flexora-hero')?.disconnectedCallback();
});
