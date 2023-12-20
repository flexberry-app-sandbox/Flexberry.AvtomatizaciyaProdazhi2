import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОтчОПродMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi2-отч-о-прод';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОтчОПродMixin, Validations, {
});

defineProjections(Model);

export default Model;
