from fastapi.testclient import TestClient

from .main import app

client = TestClient(app)


def test_greet_with_user():
    user = "TestyMcTestFace"
    response = client.get(f"/?user={user}")
    assert response.status_code == 200
    assert response.json() == {"greeting": f"Hello {user}!"}


def test_greet_without_user():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"greeting": "Hello random user!"}
