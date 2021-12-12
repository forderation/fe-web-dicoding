export default class ErrorInternal extends HTMLElement {
  connectedCallback () {
    this.render();
  }

  render () {
    this.innerHTML = /* html */ `
    <div class="top-banner" id="internal-error">
        <section class="not-found">
            <picture>
              <source media="(max-width: 600px)" type="image/jpeg" srcset="./images/500-small.jpg" class="lazyload">
              <source media="(max-width: 1000px)" type="image/jpeg" srcset="./images/500-large.jpg" class="lazyload">
              <img src="./images/500.jpg" alt="Internal Error" class="lazyload">
            </picture>
            <figcaption>Error Load Page</figcaption>
            <p>Oops we are sorry got problem please reload again.</p>
            <br/>
        </section>
    </div>
      `;
  }
}
