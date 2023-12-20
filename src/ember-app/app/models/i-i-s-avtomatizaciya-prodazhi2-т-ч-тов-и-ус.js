import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТЧТовИУсMixin
} from '../mixins/regenerated/models/i-i-s-avtomatizaciya-prodazhi2-т-ч-тов-и-ус';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧТовИУсMixin, Validations, {
});

defineProjections(Model);

export default Model;
