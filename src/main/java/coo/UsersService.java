package coo;

public class UsersService {
	private final long id;
    private final String content;

    public UsersService(long id, String content) {
        this.id = id;
        this.content = content;
    }

    public long getId() {
        return id;
    }

    public String getContent() {
        return content;
    }
}
