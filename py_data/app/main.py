from fastapi import FastAPI

app = FastAPI()


def create_greeting(user: str | None = None):
    if user is not None:
        return {"greeting": f"Hello {user}!"}

    return {"greeting": "Hello random user!"}


@app.get("/")
async def hello_user(user: str | None = None):
    return create_greeting(user)


# def main():
#     print("Hello from py-tasks!")


# if __name__ == "__main__":
#     main()
