interface Types {
  database: string;
  password: string;
  port : number;
  key: string
}

interface Driver extends Omit<Types , 'key'>{
  connect() : string
  disconnect() : string;
  isConnected(type: string): boolean
}

class PostgresDriver implements Driver{

  database: string;
  password: string;
  port: number;
  #key: string

  constructor ({ database, password, port, key} : Types) {
    this.database = database
    this.password = password
    this.port = port
    this.#key = key
  }

  connect(): string {
    return 'Success'
  }

  disconnect(): string {
    return 'Success'
  }

  isConnected(type: string) {
    return !!type
      ? true
      : false
  }
}

class OracleDriver implements Driver{

  database: string;
  password: string;
  port: number;
  #key: string

  constructor ({ database, password, port, key} : Types) {
    this.database = database
    this.password = password
    this.port = port
    this.#key = key
  }

  connect(): string {
    return 'Success'
  }

  disconnect(): string {
    return 'Success'
  }

  isConnected(type: string) {
    return !!type
      ? true
      : false
  }
}
