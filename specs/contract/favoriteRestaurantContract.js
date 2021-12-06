const itActsAsFavoriteRestaurantModel = (favoriteRestaurant) => {
  it('should return the restaurant that has been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });

    expect(await favoriteRestaurant.getRestaurant(1))
      .toEqual({ id: 1 });

    expect(await favoriteRestaurant.getRestaurant(2))
      .toEqual({ id: 2 });

    expect(await favoriteRestaurant.getRestaurant(3))
      .toEqual(undefined);
  });

  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    favoriteRestaurant.putRestaurant({ aProperty: 'random' });

    expect(await favoriteRestaurant.getListRestaurant())
      .toEqual([]);
  });

  it('can return all of the restaurants that have been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });

    expect(await favoriteRestaurant.getListRestaurant()).toEqual([
      { id: 1 },
      { id: 2 }
    ]);
  });

  it('should remove favorite restaurant', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });
    favoriteRestaurant.putRestaurant({ id: 3 });

    await favoriteRestaurant.deleteRestaurant(1);

    expect(await favoriteRestaurant.getListRestaurant()).toEqual([
      { id: 2 },
      { id: 3 }
    ]);
  });

  it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });
    favoriteRestaurant.putRestaurant({ id: 3 });

    await favoriteRestaurant.deleteRestaurant(4);

    expect(await favoriteRestaurant.getListRestaurant())
      .toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 }
      ]);
  });

  it('should be able to search for restaurants', async () => {
    favoriteRestaurant.putRestaurant({ id: 1, name: 'Melting Pot' });
    favoriteRestaurant.putRestaurant({ id: 2, name: 'Kafe Kita' });
    favoriteRestaurant.putRestaurant({ id: 3, name: 'Bring Your Phone Cafe' });
    favoriteRestaurant.putRestaurant({ id: 4, name: 'Kafe in' });

    expect(await favoriteRestaurant.searchRestaurant('Kafe')).toEqual([
      { id: 2, name: 'Kafe Kita' },
      { id: 4, name: 'Kafe in' }
    ]);
  });
};

// eslint-disable-next-line import/prefer-default-export
export { itActsAsFavoriteRestaurantModel };
