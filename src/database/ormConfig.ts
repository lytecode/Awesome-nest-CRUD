import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const config: MysqlConnectionOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'barca',
  password: 'password',
  database: 'db',
  entities: ['dist/**/**/*.entity{.ts,.js}'],
  synchronize: true,
};

export default config;
