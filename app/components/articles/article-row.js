import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  article: null,//it will be passed-in
  articleState: null,// it will be passed-in
  actions: {
    saveArticle() {
      let article = this.get('article');
      if(article.get('hasDirtyAttributes')) {
        this.sendAction('save', article);
      }
    }
  }
});
