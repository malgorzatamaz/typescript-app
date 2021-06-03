import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import MovieCard from "components/MovieCard";

test("renders card with movie data", () => {
  const movie = { title: "Title", image: "img", id: "123", year: 2000 };

  const element = render(
    <Router>
      <MovieCard movie={movie} />
    </Router>
  );
  expect(element).toMatchSnapshot();
});
