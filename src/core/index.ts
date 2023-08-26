/*
 * Public API Surface of remult
 */
export {
  Field,
  Fields,
  Entity,
  IdEntity,
  EntityBase,
  ControllerBase,
  FieldType,
  getFields,
  getEntityRef,
  ValueListFieldType,
  getValueList,
  ValueListInfo,
  CaptionTransformer,
} from "./src/remult3"
export type {
  FieldsMetadata,
  FieldRef,
  IdFieldRef,
  FieldsRef,
  EntityMetadata,
  EntityOrderBy,
  EntityFilter,
  FindOptions,
  QueryResult,
  QueryOptions,
  Repository,
  FindFirstOptions,
  ComparisonValueFilter,
  ValueFilter,
  IdFilter,
  ContainsStringValueFilter,
  EntityRef,
  SortSegments,
  ValueListFieldOptions,
  OmitEB,
  Paginator,
  LiveQuery,
  LiveQueryChangeInfo,
} from "./src/remult3"
export type { StringFieldOptions } from "./src/remult3/RepositoryImplementation"
export { describeClass } from "./src/remult3/DecoratorReplacer"
export type { EntityOptions } from "./src/entity"
export type {
  DataProvider,
  EntityDataProvider,
  EntityDataProviderFindOptions,
  ErrorInfo,
  RestDataProviderHttpProvider,
} from "./src/data-interfaces" //V
export type {
  SqlCommand,
  SqlImplementation,
  SqlResult,
} from "./src/sql-command" //V
export type {
  FieldMetadata,
  FieldOptions,
  FieldValidator,
  ValueConverter,
  ValueListItem, // reconsider, maybe it should go to remult angular as the abstraction ?
  ValueOrExpression,
} from "./src/column-interfaces" // revisit input type
export { RestDataProvider } from "./src/data-providers/rest-data-provider" //V
export { InMemoryDataProvider } from "./src/data-providers/in-memory-database" //V
export { ArrayEntityDataProvider } from "./src/data-providers/array-entity-data-provider" //V
export { WebSqlDataProvider } from "./src/data-providers/web-sql-data-provider" //V
export { SqlDatabase } from "./src/data-providers/sql-database" //V
export {
  CustomSqlFilterBuilder,
  dbNamesOf,
} from "./src/filter/filter-consumer-bridge-to-sql-request"
export type { CustomSqlFilterObject } from "./src/filter/filter-consumer-bridge-to-sql-request"

export { JsonDataProvider } from "./src/data-providers/json-data-provider" //V
//V
export type { JsonEntityStorage } from "./src/data-providers/json-data-provider" //V

//export * from './src/data-api'; //reconsider if to make internal
export {
  Controller,
  BackendMethod,
  ProgressListener,
} from "./src/server-action"
export type { BackendMethodOptions } from "./src/server-action"

export { Allow, Remult, isBackend, EventSource } from "./src/context"
export type {
  Allowed,
  RemultContext,
  ApiClient,
  AllowedForInstance,
  EventDispatcher,
  UserInfo,
} from "./src/context"
export type { ExternalHttpProvider } from "./src/buildRestDataProvider"
export { Sort } from "./src/sort"
export type { SortSegment } from "./src/sort"
export { OneToMany, CompoundIdField } from "./src/column"
export { Filter } from "./src/filter/filter-interfaces"
export { UrlBuilder } from "./urlBuilder"
export { Validators } from "./src/validators"

export { ValueConverters } from "./src/valueConverters"
export { remult } from "./src/remult-proxy"
//export { getId } from './src/remult3/getId';
export { InMemoryLiveQueryStorage } from "./src/live-query/SubscriptionServer"
export type {
  SubscriptionServer,
  LiveQueryStorage,
  StoredQuery,
} from "./src/live-query/SubscriptionServer"
export { SubscriptionChannel } from "./src/live-query/SubscriptionChannel"
export type {
  SubscriptionListener,
  SubscriptionClientConnection,
  SubscriptionClient,
  LiveQueryChange,
  Unsubscribe,
} from "./src/live-query/SubscriptionChannel"
