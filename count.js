import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({});

export const handler = async (event, context) => {
    console.log("---devops50---start-handler");
    console.log("---devops50---event", event);
    let TableName = "raffle_db";
    try {
        const command = new ScanCommand({
            TableName: TableName,
            Select: "COUNT"
        });
        
        const response = await client.send(command);

        console.log("---devops50---response", response);
        return response.Count;
    } catch (e) {
        console.log("---devops50---e", e);
        return e.message;
    }
};
