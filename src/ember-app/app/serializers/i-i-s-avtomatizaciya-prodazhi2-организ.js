import { Serializer as ОрганизSerializer } from
  '../mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-организ';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОрганизSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
