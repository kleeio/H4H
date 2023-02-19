/**
 * Returns the current datetime for the message creation.
 */
function getCurrentTimestamp() {
	return new Date();
}

/**
 * Renders a message on the chat screen based on the given arguments.
 * This is called from the `showUserMessage` and `showBotMessage`.
 */
function renderMessageToScreen(args) {
	// local variables
	let displayDate = (args.time || getCurrentTimestamp()).toLocaleString('en-IN', {
		month: 'short',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
	});
	let messagesContainer = $('.messages');

	// init element
	let message = $(`
	<li class="message ${args.message_side}">
		<div class="avatar"></div>
		<div class="text_wrapper">
			<div class="text">${args.text}</div>
			<div class="timestamp">${displayDate}</div>
		</div>
	</li>
	`);

	// add to parent
	messagesContainer.append(message);

	// animations
	setTimeout(function () {
		message.addClass('appeared');
	}, 0);
	messagesContainer.animate({ scrollTop: messagesContainer.prop('scrollHeight') }, 300);
}

/**
 * Displays the user message on the chat screen. This is the right side message.
 */
function showUserMessage(message, datetime) {
	renderMessageToScreen({
		text: message,
		time: datetime,
		message_side: 'right',
	});
}

/**
 * Displays the chatbot message on the chat screen. This is the left side message.
 */
function showBotMessage(message, datetime) {
	renderMessageToScreen({
		text: message,
		time: datetime,
		message_side: 'left',
	});
}

/**
 * Get input from user and show it on screen on button click.
 */
$('#send_button').on('click', function (e) {
	// get and show message and reset input
	showUserMessage($('#msg_input').val());
	$('#msg_input').val('');

	// show bot message
	setTimeout(function () {
		// showBotMessage(randomstring());
		showBotMessage("hey");
	}, 300);
});


const socket = io("http://localhost:5005");
const messages = document.getElementById('messages');
const form = document.getElementById('send_button');
const messageInput = document.getElementById('msg_input');

socket.on('connect', function () {
	console.log("Connected to Socket.io server");
});

socket.on('connect_error', (error) => {
	// Write any connection errors to the console
	console.error(error);
});




socket.on('bot_uttered', function (response) {
	console.log("Bot uttered:", response);
	if (response.text) {
		appendMessage(response.text, "received");
	}
	if (response.attachment) {
		appendImage(response.attachment.payload.src, "received");
	}
	if (response.quick_replies) {
		appendQuickReplies(response.quick_replies);
	}
});

form.addEventListener('submit', function (e) {
	e.preventDefault();
	const msg = messageInput.value;
	if (msg) {
		socket.emit('user_uttered', {
			"message": msg,
		});
		messageInput.value = '';

		appendMessage(msg, "sent");
	}
});



/**
 * Set initial bot message to the screen for the user.
 */
$(window).on('load', function () {
	showBotMessage("Hello there! I'm here to help. Start by sending a message down below.");
});
