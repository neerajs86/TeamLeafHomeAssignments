import { DatabaseConnection } from "./interfaceDatabaseConnection";

class PlaywrightConnection implements DatabaseConnection {
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
    }

let playwrightConnectionbj = new PlaywrightConnection();
//Print methods of interface 'MySqlConnection'
playwrightConnectionbj.connect();
playwrightConnectionbj.disconnect();
playwrightConnectionbj.executeUpdate();