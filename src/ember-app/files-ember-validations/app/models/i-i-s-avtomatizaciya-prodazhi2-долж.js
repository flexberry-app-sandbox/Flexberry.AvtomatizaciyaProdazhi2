import {
  defineNamespace,
  defineProjections,
  Model as ДолжMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi2-долж';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДолжMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
