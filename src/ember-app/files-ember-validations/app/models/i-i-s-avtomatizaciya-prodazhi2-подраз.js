import {
  defineNamespace,
  defineProjections,
  Model as ПодразMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi2-подраз';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПодразMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
