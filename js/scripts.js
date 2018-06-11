// // back end
// function Todolist(item){
//   this.item = [];
// }
// var userInput = $("#userInput").val();
// var newTodolist = new Todolist(userInput);
//
//
// //User logic
// $(document).ready(function() {
//   $("#translateBtn").click(function(e) {
//     e.preventDefault();
//
//     // console.log(newTolistist);
//     console.log(newTodolist.item);
//     $("#results").append("<p class=\"delete\">" + newTodolist.item + "</p>");
//   });
//   $("#deleteWordBtn").click(function(e) {
//     e.preventDefault();
//     $("#results").delete("<p class=\"delete\">" + newTodolist.item + "</p>");
//     });
//
// });


function Contact(userInput) {
  this.item = userInput;
}


// front end
$(document).ready(function() {
  $("form#newTodolist").submit(function(event) {
    event.preventDefault();

    var inputtedItem = $("input#userInput").val();
    var newContact = new Contact(inputtedItem);

    $("div#contacts").append("<p><button class='btn btn-danger'>Remove!" + newContact.item + "</button></p>");

    $(".btn-danger").click(function() {
        $(this).parent().remove();

    });
});
