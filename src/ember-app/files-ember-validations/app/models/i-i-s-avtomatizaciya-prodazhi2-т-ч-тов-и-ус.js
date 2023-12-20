import {
  defineNamespace,
  defineProjections,
  Model as ТЧТовИУсMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧТовИУсMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
