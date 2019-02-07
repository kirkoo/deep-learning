'use strict';
const { Markup } = require('telegraf');
const { homepage } = require('../../package.json');

const message = `\
Hi there!

I'm <b>Cleanbot</b> I help you keep \
your <b>groups</b> safe from <b>spammers,detect and delete adult content and swear words</b>

Send /commands to get the list of my available commands.

If you want to use me for your groups, \
note that I'm also useful on a network of groups. 


`;

const helpHandler = ({ chat, replyWithHTML }) => {
	if (chat.type !== 'private') return null;

	return replyWithHTML(
		message,
		Markup.inlineKeyboard([
			Markup.urlButton('🛠 Setup a New Bot', homepage)
		]).extra()
	);
};

module.exports = helpHandler;
