$ (document) .ready (function () {
  $ ( '# myForm'). submit (function (event) {
    event.preventDefault ();
    var address = $ ( '# slwaddress ') .val ();
    $ ( '# storelocator-search_address'). val (address);
    storeLocatorSetUserAddress (address);
  });
});
