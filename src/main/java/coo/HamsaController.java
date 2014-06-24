package coo;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/rest")
public class HamsaController {
	private static final String template = "Hello, %s!";
	private final AtomicLong counter = new AtomicLong();

	@RequestMapping(value="/users" ,method = RequestMethod.GET)
	public @ResponseBody
	TweetsService getUsers(
			@RequestParam(value = "name", required = false, defaultValue = "Stranger") String name) {
		return new TweetsService(counter.incrementAndGet(), String.format(
				template, name));
	}
	
	@RequestMapping(value="/tweets" ,method = RequestMethod.GET)
	public @ResponseBody
	TweetsService getTweets(
			@RequestParam(value = "name", required = false, defaultValue = "Stranger") String name) {
		return new TweetsService(counter.incrementAndGet(), String.format(
				template, name));
	}
}
