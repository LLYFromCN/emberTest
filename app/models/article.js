import DS from 'ember-data';

export default DS.Model.extend({
  createAt: DS.attr('date'),
  description: DS.attr('string'),
  notes: DS.attr('string'),
  state: DS.attr('string'),
  friend: DS.belongsTo('friend')
});
