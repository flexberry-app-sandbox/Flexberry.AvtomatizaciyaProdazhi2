import {
  defineNamespace,
  defineProjections,
  Model as ОрганизMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi2-организ';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОрганизMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
