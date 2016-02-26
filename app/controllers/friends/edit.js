import EmployeesBaseController from './base';

export default EmployeesBaseController.extend({
  // isValid: Ember.computed(
  //   'model.firstName',
  //   'model.lastName',
  //   'model.email',
  //   'model.twitter',
  //   function(){
  //     return !Ember.isEmpty(this.get('model.firstName')) &&
  //       !Ember.isEmpty(this.get('model.lastName')) &&
  //       !Ember.isEmpty(this.get('model.email')) &&
  //       !Ember.isEmpty(this.get('model.twitter'));
  //   }
  // ),
  actions: {
    // save() {
    //   if(this.get('isValid')){
    //     this.get('model').save().then((friend) => {
    //       this.transitionToRoute('friends.show', friend);
    //     });
    //   } else {
    //     this.set('errorMessage', 'You have to fill all the field!');
    //   }
    //   return false;
    // },
    cancel() {
      this.transitionToRoute('friends.show', this.get('model'));
      return false;
    }
  }
});
