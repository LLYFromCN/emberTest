import Ember from 'ember';
import request from 'ic-ajax';

export default Ember.Route.extend({
  model() {
    return request('/api/friends').then(function(data){
      return {
        friendCount: data.friends.length
      };
    });
  }
});
