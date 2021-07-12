// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("America/Toronto");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "off-code" is now active!');

  const today = dayjs().tz();
  const todayHour = today.hour();

  if (todayHour < 12) {
    vscode.window.showErrorMessage("It's not past 12PM yet...closing VSCode!");
    setTimeout(() => {
      vscode.commands.executeCommand("workbench.action.closeWindow");
    }, 3000);
  }
}

// this method is called when your extension is deactivated
export function deactivate() {}
