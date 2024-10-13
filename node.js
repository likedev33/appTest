
const Parse = require("parse/node");

const APP_ID = "yZWkQnwvQPSZ11kAwf9SAZpgDwwdEk6jGMiMVihn"
const JAVASCRIPT_KEY = "yVxSRqa1W3p6wM6slUjDk4Kfde7DWYdUAzlHdjhB"

console.log("Initializing Application", APP_ID);
Parse.Initialize(APP_ID, JAVASCRIPT_KEY);
Parse.serverURL = "https://parseapi.back4app.com/"

const userClassName = Parse.Object.extend("users")

const pUsers = [
	{
		id : 1,
		username: 'RafikCH',
		email: 'RafikCH@gmail.com',
		password: 'Rafik123',
	},
	{
		id : 2,
		username: 'AminaCH',
		email: 'AminaCH@gmail.com',
		password: 'Amina456',
	},
	{
		id : 3,
		username: 'MohandCH',
		email: 'MohandCH@gmail.com',
		password: 'Mohand789',
	},
];

const pushUserData = async () => {
	
}
