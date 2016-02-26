import Ember from 'ember';

export default Ember.Route.extend({
  model() { // model hook, in ES6, it means add a prototype object to the export Ember.Route object
    return this.modelFor('friends/show').get('articles');
  },
  actions: { // define the action method
    save(model) {
      model.save();
      return false; // no bubble
    }
  }
});
