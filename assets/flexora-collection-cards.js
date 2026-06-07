class FlexoraCollectionCards extends HTMLElement {
  connectedCallback() {
    if (this.initialized) return;

    this.track = this.querySelector('[data-collection-track]');
    this.previousButton = this.querySelector('[data-collection-previous]');
    this.nextButton = this.querySelector('[data-collection-next]');

    if (!this.track || (!this.previousButton && !this.nextButton)) return;

    this.isRtl = getComputedStyle(this).direction === 'rtl';
    this.handlePrevious = () => this.scroll(-1);
    this.handleNext = () => this.scroll(1);
    this.previousButton?.addEventListener('click', this.handlePrevious);
    this.nextButton?.addEventListener('click', this.handleNext);
    this.initialized = true;
  }

  disconnectedCallback() {
    this.previousButton?.removeEventListener('click', this.handlePrevious);
    this.nextButton?.removeEventListener('click', this.handleNext);
    this.initialized = false;
  }

  scroll(direction) {
    const card = this.track.querySelector('.fx-collection-card');
    if (!card) return;

    const styles = getComputedStyle(this.track);
    const gap = Number.parseFloat(styles.columnGap) || 0;
    const amount = (card.getBoundingClientRect().width + gap) * direction * (this.isRtl ? -1 : 1);
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.track.scrollBy({
      left: amount,
      behavior: reducedMotion ? 'auto' : 'smooth',
    });
  }
}

if (!customElements.get('flexora-collection-cards')) {
  customElements.define('flexora-collection-cards', FlexoraCollectionCards);
}

document.addEventListener('shopify:section:load', (event) => {
  event.target.querySelector('flexora-collection-cards')?.connectedCallback();
});

document.addEventListener('shopify:section:unload', (event) => {
  event.target.querySelector('flexora-collection-cards')?.disconnectedCallback();
});
