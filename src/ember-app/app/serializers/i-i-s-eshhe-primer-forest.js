import { Serializer as ForestSerializer } from
  '../mixins/regenerated/serializers/i-i-s-eshhe-primer-forest';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ForestSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
