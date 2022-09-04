import {
  render,
  screen,
  act,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import App from "../App";
import mockPosts from "../mock/mockPosts";
import Post from "../components/Post";

describe("testing components", () => {
  it("test body component", async () => {
    const { getByTestId } = render(<Post post={mockPosts[0]} />);
    const div = await waitFor(() => getByTestId("post-body"));
    expect(div).toHaveTextContent(
      "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
    );
  });
  it("test header component", async () => {
    const { getByTestId } = render(<Post post={mockPosts[0]} />);
    const div = await waitFor(() => getByTestId("post-header"));
    expect(div).toHaveTextContent("Leanne GrahamSincere@april.biz");
  });
  it("test footer component", async () => {
    const { getByTestId } = render(<Post post={mockPosts[0]} />);
    const div = await waitFor(() => getByTestId("post-footer"));
    expect(div).toHaveTextContent("5");
  });
});
test("test the landing page", async () => {
  render(<App />);
  const response = screen.queryByTestId("title");

  expect(screen.getByTestId("title")).toHaveTextContent(/List of all posts/);
  expect(screen.getByTestId("search-button")).toBeDisabled();
  expect(screen.getByTestId("search-input")).toHaveDisplayValue("");
});
