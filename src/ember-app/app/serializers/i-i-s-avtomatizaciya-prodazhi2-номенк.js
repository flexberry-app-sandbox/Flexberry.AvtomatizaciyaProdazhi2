import { Serializer as НоменкSerializer } from
  '../mixins/regenerated/serializers/i-i-s-avtomatizaciya-prodazhi2-номенк';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(НоменкSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
