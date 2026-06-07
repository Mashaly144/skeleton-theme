class FlexoraFeaturedCollection extends HTMLElement {
  connectedCallback() {
    if (this.initialized || this.dataset.layout !== 'carousel') return;

    this.track = this.querySelector('[data-featured-track]');
    this.previousButton = this.querySelector('[data-featured-previous]');
    this.nextButton = this.querySelector('[data-featured-next]');
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
    const item = this.track.querySelector('.fx-featured-collection__item');
    if (!item) return;

    const styles = getComputedStyle(this.track);
    const gap = Number.parseFloat(styles.columnGap) || 0;
    const amount = (item.getBoundingClientRect().width + gap) * direction * (this.isRtl ? -1 : 1);
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.track.scrollBy({
      left: amount,
      behavior: reducedMotion ? 'auto' : 'smooth',
    });
  }
}

if (!customElements.get('flexora-featured-collection')) {
  customElements.define('flexora-featured-collection', FlexoraFeaturedCollection);
}

document.addEventListener('shopify:section:load', (event) => {
  event.target.querySelector('flexora-featured-collection')?.connectedCallback();
});

document.addEventListener('shopify:section:unload', (event) => {
  event.target.querySelector('flexora-featured-collection')?.disconnectedCallback();
});
