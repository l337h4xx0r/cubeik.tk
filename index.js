function checkHash()
{
	//Validate that the hash location exists, otherwise just go home
	if(!window.location.hash.match('^#(home|about|contact|music|games)$'))
	{
		window.location.hash = "home";
	}
}

function URLChecks()
{
	checkHash();
	
	//If the URL doesn't have acceptable formatting
	if(!window.location.href.match("^http:\/\/cubeik\.tk\/[^A-z0-9]*#[A-z]+$"))
	{
		//Check if it has something before the hash
		if(window.location.href.match("^http:\/\/cubeik\.tk\/([A-z0-9._\-]+)#[A-z]+$"))
		{
			//There are characters before the hash, lets remove them, but first we may as well check if they are trying to go to a specific page
			//This could prove useful
			if(loc = window.location.href.match("^http:\/\/cubeik\.tk\/([A-z0-9._\-]+)#[A-z]+$")[1].match('^(home|about|contact|music|games)$')[1])
			{
				//They are so lets just go there instead
				window.location.hash = loc;
				//And remove the characters we don't want before the #
				window.location.href = window.location.href.replace(window.location.href.match("^http:\/\/cubeik\.tk\/([A-z0-9._\-]+)#[A-z]+$")[1], "");
			}
			else
			{
				//They just entered garble, so we'll just remove it
				window.location.href = window.location.href.replace(window.location.href.match("^http:\/\/cubeik\.tk\/([A-z0-9._\-]+)#[A-z]+$")[1], "");
			}
		}
	}
}

$(window).bind('hashchange', checkHash);
$(URLChecks);
