import {
  defineNamespace,
  defineProjections,
  Model as ОтчОстНСклMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi2-отч-ост-н-скл';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОтчОстНСклMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
