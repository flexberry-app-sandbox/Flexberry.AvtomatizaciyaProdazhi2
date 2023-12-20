import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СостОтгрEnum from '../enums/i-i-s-avtomatizaciya-prodazhi2-сост-отгр';

export default FlexberryEnum.extend({
  enum: СостОтгрEnum,
  sourceType: 'IIS.Avtomatizaciya_Prodazhi2.СостОтгр'
});
