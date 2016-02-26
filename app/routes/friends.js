import Ember from 'ember';

export default Ember.Route.extend({
  // setupController: function(controller){
  //   console.log('+++++++++++++++++++++++++++++++++++++++++++hello index');
  //   controller.set('outlet', 'hello outlet!');
  // }
  actions: {
    save() {
      console.log('+--- save action in friends new controller');
      return true;
    },
    cancel() {
      console.log('+--- cancel action in friends new controller');
      return true;
    },
    delete(friend) {
      friend.destroyRecord().then(() => {
        this.transitionTo('friends.index');
      });
    }
  }
});
