import { MySqlConnection } from "./abstractClassMySqlConnection";

class PlaywrightConnection extends MySqlConnection {
       //Implement interface 'DatabaseConnection' methods
       connect() : void {
                console.log("Connect to MySql Database");
            }
        disconnect() : void {
                console.log("Disconnect to MySql Database");
            }
        executeUpdate() : void {
                console.log("Perform update operations after connecting to MySql database");
            }
    
        //Implements abstract class 'MySqlConnection'
        executeQuery() : void {
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