import AppWindow from "./window-manager";
import * as moment from 'moment';
import * as path from 'node:path';

export class AgentLogger {
	static instance: AgentLogger;
	private appWindow: AppWindow;
	constructor() {
		this.appWindow = AppWindow.getInstance(path.join(__dirname, '..'));
		this.appWindow.initLogWindow()
	}

	static getInstance(): AgentLogger {
		if (!AgentLogger.instance) {
			AgentLogger.instance = new AgentLogger();
		}
		return AgentLogger.instance;
	}

	formatMessage(message: string, type: string) {
		return `${moment().format('YYYY-MM-DD HH:mm:ss')} ${type}: ${message}`;
	}

	showMessage(message: string, type: string, time: Date) {
		if (this.appWindow?.logWindow && !this.appWindow.logWindow.isDestroyed()) {
			try {
				this.appWindow.logWindow.webContents.send('DASHBOARD_EVENT', {
					type: 'log_state',
					data: {
						dateTime: time,
						msg: message,
						type
					}
				});
			} catch (error) {
				console.error('Log window error', error);
			}
		}
	}

	info(message: string) {
		const logMsg = this.formatMessage(message, 'Info');
		this.showMessage(message, 'Info', new Date());
		console.log(logMsg);
	}

	warn(message: string) {
		const logMsg = this.formatMessage(message, 'Warn');
		console.warn(logMsg);
		this.showMessage(message, 'Warn', new Date());
	}

	error(message: string) {
		const logMsg = this.formatMessage(message, 'Error');
		console.error(logMsg);
		this.showMessage(message, 'Error', new Date());
	}
}
