import { Serializer as МенеджSerializer } from
  '../mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-менедж';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(МенеджSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
