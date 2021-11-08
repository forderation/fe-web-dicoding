const DrawerInitiator = {
  init ({ button, drawer, content }) {
    button.on('click', (event) => {
      this._toggleDrawer(event, drawer);
    });
    content.on('click', (event) => {
      this._toggleDrawer(event, drawer);
    });
  },

  _toggleDrawer (event, drawer) {
    event.stopPropagation();
    drawer.toggleClass('open');
  }
};

export default DrawerInitiator;
