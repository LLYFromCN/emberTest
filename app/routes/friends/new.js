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
  },
  resetController(controller, isExiting) { // it's a hook, used to clear the storge level before reload 在不保存记录的时候，使用这个钩子来清理存储层
    if(isExiting) {
      var model = controller.get('model');

      if(model.get('isNew')) {
        model.destroyRecord();
      }
    }
  }
});
