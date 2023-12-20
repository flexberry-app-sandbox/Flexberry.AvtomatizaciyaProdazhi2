import { Serializer as ПодразSerializer } from
  '../mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-подраз';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПодразSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
