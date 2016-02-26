import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('friend');
  },
  actions: {
    save() {
      console.log('+-- save action in friends new controller');
      return true;
    },
    cancel() {
      console.log('+-- cancle action in friends new controller');
      return true;
    }
  }
});
