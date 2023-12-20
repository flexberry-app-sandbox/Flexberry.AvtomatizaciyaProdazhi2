import {
  defineNamespace,
  defineProjections,
  Model as НоменкMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi2-номенк';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(НоменкMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
