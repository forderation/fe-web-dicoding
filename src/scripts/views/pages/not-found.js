
const NotFound = {
  render () {
    return /* html */ `
        <div class="top-banner">
            <section class="not-found">
                <img src="./images/404.jpg" alt="404 Not Found" />
                <figcaption>Page Not Found</figcaption>
                <p>Oops looks like you did not found your page.</p>
                <br/>
                <a class="btn-primary" href="/">Back Explore Restaurants</a>
            </section>
        </div>
    `;
  },

  afterRender () {}
};

export default NotFound;
