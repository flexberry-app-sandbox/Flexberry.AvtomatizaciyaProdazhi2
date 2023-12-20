import { Serializer as ОтчОПродSerializer } from
  '../mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-отч-о-прод';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОтчОПродSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
