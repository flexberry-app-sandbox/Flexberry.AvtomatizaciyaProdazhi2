import { Serializer as КонтрSerializer } from
  '../mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-контр';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КонтрSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
