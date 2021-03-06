ApiUtil = {
  fetchWines: function(){
    $.ajax({
      url: '/api/wines',
      type: 'GET',
      success: function(wines){
        ApiActions.receiveAll(wines);
      }
    });
  },
  createWine: function(data, callback){
    $.ajax({
      url: '/api/wines',
      type: 'post',
      data: { wine: data },
      success: function (wine) {
        ApiActions.receiveSingleWine(wine);
        callback(wine.wine_id);
      },
      error: function () {
        console.log("Something went wrong");
      }
    });
  },
  fetchSingleWine: function(id){
    $.ajax({
        url: '/api/wines/' + id,
        type: 'GET',
        success: function(wine){
          ApiActions.receiveSingleWine(wine);
        }
    });
  },
  updateWine: function(data, id, callback){
    $.ajax({
        url: '/api/wines/' + id,
        type: 'PATCH',
        data: { wine: data },
        success: function(wine){
          console.log(wine);
          ApiActions.receiveSingleWine(wine);
          callback(wine.wine_id);
        }
    });
  },
  deleteSingleGif: function(id, callback){
    $.ajax({
      url: '/api/gifs/' + id,
      type: 'DELETE',
      success: function(gif){
        ApiActions.removeSingleGif(gif);
        ApiUtil.fetchAlbums({}, callback);
      },
      error: function(){
        console.log('error');
      }
    });
  },
  fetchAlbums: function(param, callback){
    $.ajax({
      url: '/api/albums',
      type: 'GET',
      data: param,
      success: function(albums){
        ApiActions.receiveAllAlbums(albums);
        callback && callback();
      }
    });
  },
  createAlbum: function(data, callback){
    $.ajax({
      url: '/api/albums',
      type: 'POST',
      data: { album: data },
      success: function (album) {
        ApiActions.receiveSingleAlbum(album);
        callback && callback(album.id);
        console.log("album created!");
      },
      error: function () {
        console.log("this is the error");
      }
    });
  },
  fetchSingleAlbum: function(albumId, callback){
    $.ajax({
      url: '/api/albums/' + albumId,
      type: 'GET',
      success: function(album){
        ApiActions.receiveSingleAlbum(album);
        ApiActions.receiveAll(album.gifs);
      }
    });
  },
  fetchUserAlbums: function(userId){
    $.ajax({
      url: '/users/' + userId,
      type: 'GET',
      success: function(user){
        ApiActions.receiveAllAlbums(user.albums);
      }
    });
  },
  addToAlbum: function(data, callback){
    $.ajax({
      url: '/api/albums',
      type: 'POST',
      data: { album: data },
      success: function (album) {
        ApiActions.updateSingleAlbum(album);
        callback && callback(album.id);
        console.log("added to Album");
      },
      error: function () {
        console.log("this is the error");
      }
    });
  },
  deleteSingleAlbum: function(albumId, callback){
    $.ajax({
      url: '/api/albums/' + albumId,
      type: 'DELETE',
      success: function (album) {
        ApiActions.removeSingleAlbum(album);
        callback();
        console.log("deleted Album");
      },
      error: function () {
        console.log("this is the error");
      }
    });
  },
  fetchSingleUser: function(userId){
    $.ajax({
      url: '/users/' + userId,
      type: 'GET',
      success: function (user) {
        ApiActions.receiveSingleUser(user);
      },
      error: function () {
        console.log("this is the error");
      }
    });
  },
  removeSingleUser: function(callback){
    $.ajax({
      url: '/session/',
      type: 'DELETE',
      success: function (user) {
        ApiActions.removeSingleUser(user);
        callback && callback();
      },
      error: function () {
        console.log("logout error");
      }
    });
  }
};
