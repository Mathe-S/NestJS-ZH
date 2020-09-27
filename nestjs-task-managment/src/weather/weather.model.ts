export interface searchTerms {
  city: string;
}

export interface dataTerm {
  data: {
    main: {
      temp: number;
    };
  };
}

export interface RedisOptions {
  name?: string;
  url?: string;
  port?: number;
  host?: string;
}

export const redisOptions = {
  host: '127.0.0.1',
  port: 6379,
  expire: 1 * 60 * 60,
  PID: 7646,
};
