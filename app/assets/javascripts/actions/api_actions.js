ApiActions = {
  receiveAll: function(wines){
    AppDispatcher.dispatch({
      actionType: WineConstants.WINES_RECEIVED,
      wines: wines
    });
  },
  receiveSingleWine: function(wine){
    AppDispatcher.dispatch({
      actionType: WineConstants.WINE_RECEIVED,
      wine: wine
    });
  },
  removeSingleWine: function(wine){
    AppDispatcher.dispatch({
      actionType: GifConstants.WINE_REMOVED,
      wine: wine
    });
  },
  receiveSingleTag: function(tag){
    AppDispatcher.dispatch({
      actionType: GifConstants.TAG_SEARCHED,
      tag: tag
    });
  },
  receiveAllAlbums: function(albums){
    AppDispatcher.dispatch({
      actionType: AlbumConstants.ALBUMS_RECEIVED,
      albums: albums
    });
  },
  receiveSingleAlbum: function(album){
    AppDispatcher.dispatch({
      actionType: AlbumConstants.ALBUM_RECEIVED,
      album: album
    });
  },
  removeSingleAlbum: function(album){
    AppDispatcher.dispatch({
      actionType: AlbumConstants.ALBUM_REMOVED,
      album: album
    });
  },
  updateSingleAlbum: function(album){
    AppDispatcher.dispatch({
      actionType: AlbumConstants.ALBUM_UPDATED,
      album: album
    });
  },
  receiveSingleUser: function(user){
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_RECEIVED,
      user: user
    });
  },
  removeSingleUser: function(user){
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_REMOVED,
      user: user
    });
  },
  receiveTagSearch: function(gifs){
    AppDispatcher.dispatch({
      actionType: GifConstants.TAG_SEARCHED,
      gifs: gifs
    });
  }
};
