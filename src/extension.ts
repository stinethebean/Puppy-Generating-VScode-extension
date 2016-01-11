// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'; 

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "puppypopup" is now active!'); 

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	var open = require("open");
	var disposable = vscode.commands.registerCommand('extension.sayHello', () => openPuppy());
    var disposable = vscode.commands.registerCommand('extension.randomPuppy', () => randomPuppy());
    var disposable = vscode.commands.registerCommand('extension.hourlyPuppy', () => hourlyPuppy());
    
	
	context.subscriptions.push(disposable);
}

function puppyTimer(time){
    var repeat = require('repeat');
    repeat(openPuppy).every(time, 'minutes').for(4, 'hours').start.in(5, 'sec');
}

function randomPuppy(){
    var random = require('random-number-generator')
    var minutes = random(60,15);
    puppyTimer(minutes);
}

function hourlyPuppy(){
    puppyTimer(60);
}


function openPuppy(){
    var open = require('open');
    open("http://www.thepuppyapi.com/puppy?format=src");
}