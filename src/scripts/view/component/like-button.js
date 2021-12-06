export default class LikeButton extends HTMLElement {
  set like (likeState) {
    this._likeState = likeState;
    this.render();
  }

  get like () {
    return this._likeState;
  }

  render () {
    this.innerHTML = this._likeState ? this.unlikeButton() : this.likeButton();
  }

  likeButton () {
    return /* html */`
    <button aria-label="like this restaurant" id="likeButton" class="like">
      <i class="far fa-heart" aria-hidden="true"></i>
    </button>
    `;
  }

  unlikeButton () {
    return /* html */`
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
        <i class="fas fa-heart" aria-hidden="true"></i>
    </button>
    `;
  }
}
