import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // return [
    // {id:14907,firstName:"User",lastName:"friends",email:"user.aa",twitter:"user",total_articles:0},
    // {id:14908,firstName:"Johnny",lastName:"Cash",email:"j@cash.com",twitter:"jcash",total_articles:0}//,
    // //{"id":14893,"first_name":"warren","last_name":"wowo","email":"warrenwu212gmail.com","twitter":"@warren","total_articles":4},
    // //{"id":14910,"first_name":"Johnny","last_name":"Cash","email":"j@cash.com","twitter":"jcash","total_articles":0}
    // ];
    return this.store.findAll('friend');
  },
  actions: {
    delete(friend) {
      friend.destroyRecord();
      return false;
    }
  }
});
