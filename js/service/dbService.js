angular.module('appModule').factory('DbService', function() {
  var Loki = require('lokijs');

  var db = null;
  var calendar = null;
  var task = null;

  return{
      init: function(){
        this.db = new Loki('taskfocus.db', {autosave:true});
        (this.db.getCollection('Calendar') == null) ? this.calendar = this.db.addCollection('Calendar') : this.calendar = this.db.getCollection('Calendar');
        (this.db.getCollection('Task') == null) ? this.task = this.db.addCollection('Task') : this.task = this.db.getCollection('Task');
      },
      insertTask: function(task){
        this.task.insert(task);
      },
      getTask: function(args){
        var query = {};
        if(args.date) query.date = args.date;
        if(args.limit) return this.task.find(query).limit(args.limit);
        else return this.task.find(query);
      }
  }
});
