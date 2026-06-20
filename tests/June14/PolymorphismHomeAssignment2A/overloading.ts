class APIClient {
    //Declare methods
    sendRequest(endpoint : string) : void;
    sendRequest(endpoint : string, requestBody : string, requestStatus : string) : void;

   //Define/Create methods
   sendRequest(endpoint : string, requestBody? : string, requestStatus? : string) : void {
    if(endpoint && requestBody && requestBody) {
        console.log(`This is ${endpoint} endpoint with the request body ${requestBody} and getting this ${requestStatus} status`)
    }
    else {
        console.log(`This is ${endpoint} endpoint`);
    }
   }
}

   //Execute Methods
   let apiClient = new APIClient();
   apiClient.sendRequest("POST", "{'username' : 'Neeraj', 'password' : 'Test@123'}", "OK");
   apiClient.sendRequest("POST");