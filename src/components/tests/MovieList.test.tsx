import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import MoviesList from "../MoviesList";

describe("MovieList", () => {
  const movies = [
    { title: "Title1", image: "img", id: "123", year: 2001 },
    { title: "Title2", image: "img", id: "124", year: 2012 },
  ];

  const props = {
    page: 1,
    setPage: jest.fn(),
    movies,
    pagesCount: 1,
  };

  test("renders movies list", () => {
    const element = render(
      <Router>
        <MoviesList {...props} />
      </Router>
    );
    expect(element).toMatchSnapshot();
  });

  test("list should have two elements", () => {
    render(
      <Router>
        <MoviesList {...props} />
      </Router>
    );
    const elem1 = screen.getByText("Title1");
    const elem2 = screen.getByText("Title2");

    expect(elem1).toBeInTheDocument();
    expect(elem2).toBeInTheDocument();
  });
});
