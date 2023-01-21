import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'IQSMDB',
  connector: 'mysql',
  url: '',
  host: 'mysql://www.inasc.com.co',
  port: 3306,
  user: 'inasc_rojecas',
  password: 'Icl7007+',
  database: 'inasc_IQMS'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class IqsmdbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'IQSMDB';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.IQSMDB', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
