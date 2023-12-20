import {
  defineNamespace,
  defineProjections,
  Model as МенеджMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi2-менедж';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(МенеджMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
