import { DatabaseConnection } from "./interfaceDatabaseConnection";

export abstract class MySqlConnection implements DatabaseConnection {
    //Abstract method
    abstract executeQuery() : void;
    //Interface 'DatabaseConnection' methods
    abstract connect(): void;
    abstract disconnect(): void;
    abstract executeUpdate(): void;
}