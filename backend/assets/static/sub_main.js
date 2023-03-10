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
		<i class="fas fa-heart avatar" style="font-size:36px;"></i>
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
	// setTimeout(function () {
	showBotMessage(randomstring());
	// }, 300);
});

/**
 * Returns a random string. Just to specify bot message to the user.
 */
function randomstring() {
	// let output = 'no';
	// let output = '';
	console.log($('#msg_input').val());
	$.ajax({
		url: 'http://localhost:5005/webhooks/rest/webhook',
		method: 'POST',
		data: JSON.stringify({
			"sender": "user",
			"message": $('#msg_input').val()
		}),
		contentType: `application/json`,
		success: function (response) {
			console.log(response[0].text);
			// showBotMessage(response[0].text);
			return "hello";
			// return response[0].text;
		},
		error: function () {
			// showBotMessage("error");
			return "error";
		}
	});

	// return output;
}

/**
 * Set initial bot message to the screen for the user.
 */
$(window).on('load', function () {
	showBotMessage("Hello there! I'm here to help. Start by sending a message down below.");
});
