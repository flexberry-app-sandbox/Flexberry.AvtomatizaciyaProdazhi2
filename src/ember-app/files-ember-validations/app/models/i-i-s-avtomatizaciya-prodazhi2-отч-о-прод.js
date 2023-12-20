import {
  defineNamespace,
  defineProjections,
  Model as ОтчОПродMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi2-отч-о-прод';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОтчОПродMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
