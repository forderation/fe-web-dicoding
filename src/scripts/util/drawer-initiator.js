const DrawerInitiator = {
  init ({ button, drawer, content }) {
    const that = this;
    button.addEventListener('click', function (event) {
      that._toggleDrawer(event, drawer);
    });
    content.addEventListener('click', function (event) {
      that._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer (event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer (event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  }
};

export default DrawerInitiator;
