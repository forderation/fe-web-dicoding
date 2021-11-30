export default class ErrorInternal extends HTMLElement {
  connectedCallback () {
    this.render();
  }

  render () {
    this.innerHTML = /* html */ `
    <div class="top-banner" id="internal-error">
        <section class="not-found">
            <img src="./images/500.jpg" alt="500 internal error" />
            <figcaption>Error Load Page</figcaption>
            <p>Oops we are sorry got problem please reload again.</p>
            <br/>
        </section>
    </div>
      `;
  }
}
