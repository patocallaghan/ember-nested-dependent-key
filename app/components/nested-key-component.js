import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  init() {
    this._super(...arguments);
    this.set('items', [{
      id: 1,
      subitems: [
        { id: 2 },
        { id: 3 },
      ]
    }, {
      id: 4,
      subitems: [
        { id: 5 },
        { id: 6 },
      ]
    }])
  },
  badNestedDependency: computed('items.@each.subitems.id', function() {
    return this.items;
  }),
});
