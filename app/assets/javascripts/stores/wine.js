(function(root) {
  var _wines = [];
  var CHANGE_EVENT = "CHANGE";
  var SINGLE_CHANGE_EVENT = "SINGLE_CHANGE_EVENT";

  var resetWines = function(wines){
    _wines = wines.slice(0);
  };

  var addWine = function(wine){
    var idx;
    for (var i = 0; i < _wines.length; i++) {
     if (_wines[i].wine_id === wine.wine_id) {
       idx = i;
     }
    }
    if (!idx){
      _wines.push(wine);
    }
  };

  var removeWine = function(wine){
    var idx;
    for (var i = 0; i < _wines.length; i++) {
     if (_wines[i].id === wine.id) {
       idx = i;
     }
    }
    if (idx !== -1){
      _wines.splice(idx, 1);
    }
  };

  var WineStore = root.WineStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return _wines.slice(0);
    },
    find: function(id){
      var wine;
     _wines.forEach(function(w) {
       if(w.wine_id === id) { wine = w; }
     });
     return wine;
    },
    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },
    addSingleChangeListener: function(callback){
      this.on(SINGLE_CHANGE_EVENT, callback);
    },
    removeSingleChangeListener: function(callback){
      this.removeListener(SINGLE_CHANGE_EVENT, callback);
    },
    dispatcherID: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case WineConstants.WINES_RECEIVED:
          var result = resetWines(payload.wines);
          WineStore.emit(CHANGE_EVENT);
          break;
        case WineConstants.WINE_RECEIVED:
          var singleResult = addWine(payload.wine);
          console.log(payload.wine);
          WineStore.emit(SINGLE_CHANGE_EVENT);
          break;
        case WineConstants.WINE_REMOVED:
          var singleRemove = removeWine(payload.wine);
          WineStore.emit(SINGLE_CHANGE_EVENT);
          break;
      }
    })
  });

}(this));
