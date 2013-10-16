Todos = new Meteor.Collection("todos")

if (Meteor.isClient) {
  // client code
  Template.todo_list.todos = function(){
    return Todos.find({});
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
