Todos = new Meteor.Collection("todos")

if (Meteor.isClient) {
  // client code
  Template.todo_list.todos = function(){
    return Todos.find({});
  }

  Template.todo_info.events = {
    'change input': function(evt){
      Todos.update(this._id, {$set: {done: !!evt.target.checked}});
    }
  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
