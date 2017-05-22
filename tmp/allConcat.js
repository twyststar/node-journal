var Journal = require('./../js/journal.js').journalModule;

$(document).ready(function() {
  $('#journal-form').submit(function(event){
    event.preventDefault();
    var name = $('#name').val();
    var entry = $('#entry').val();
    var newEntry = new Journal (name, entry);

    $("ul#entries").append("<li><span class='clickEntry'>"+ newEntry.name + ", " + newEntry.count() + " words.</li>");
    $("ul#entries").append("<p>" + newEntry.preview() + "...</p>");

    $('.clickEntry').last().click(function(){
        $("#show-entry").show();
        $("#show-entry h2").text(newEntry.name);
        $(".fullEntry").text(newEntry.entry);
        $(".letters").text(newEntry.letters());
    });
  });

});
