import Ember from 'ember';

export default Ember.Route.extend({
  // model hook
  model() {
    return this.store.createRecord('article', {
      // state: 'borrowed', // set default value while define the model
      friend: this.modelFor('friends/show')
    });
  }, 
  actions: {
    save() {
      this.modelFor('articles/new').save().then(() => {
        this.transitionTo('articles');
      });
    },
    cancel() {
      this.transitionTo('articles');
    }
  }
});
