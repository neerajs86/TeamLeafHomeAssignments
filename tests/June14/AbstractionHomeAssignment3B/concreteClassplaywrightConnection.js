import { MySqlConnection } from "./abstractClassMySqlConnection";
class PlaywrightConnection extends MySqlConnection {
    //Implement interface 'DatabaseConnection' methods
    connect() {
        console.log("Connect to MySql Database");
    }
    disconnect() {
        console.log("Disconnect to MySql Database");
    }
    executeUpdate() {
        console.log("Perform update operations after connecting to MySql database");
    }
    //Implements abstract class 'MySqlConnection'
    executeQuery() {
        console.log("Execute queries after connecting to MySql database");
    }
}
let playwrightConnectionbj = new PlaywrightConnection();
//Print methods of interface 'MySqlConnection'
playwrightConnectionbj.connect();
playwrightConnectionbj.disconnect();
playwrightConnectionbj.executeQuery();
//Print methods of abstract class 'MySqlConnection'
playwrightConnectionbj.executeUpdate();
