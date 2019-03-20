(function (G, U){
    "use strict";
    var items = [
      {},
      {"name": "Карта Универсальная"},
      {},
      {},
      {},
      {},
      {},
      {"name": "Карта Универсальная ГОЛД"}
    ],
        PREFIX = "my-library-id-prefix-";

    function getItem(productID){
        return items[productID];
    }
    G.item = getItem; //Экспорт функции getItem() в глобальное пространство имён под именем createId
    
}(this, productID));
