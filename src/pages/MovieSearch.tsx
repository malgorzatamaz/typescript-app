import { InputGroup, Input, Button, Spinner, Alert } from "reactstrap";
import React, { useState } from "react";
import styled from "styled-components";

import margins from "assets/margins";
import MoviesList from "components/MoviesList";
import useMovieSearch from "api/useMoviesSearch";

export interface MovieSearchProps {}

const StyledSpinner = styled(Spinner)`
  height: "30px";
  width: "30px";
`;

const StyledInput = styled(InputGroup)`
  padding: ${margins.m} 0;
`;

const MovieSearch: React.FC<MovieSearchProps> = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState<string | undefined>();
  const [searchInput, setSearchInput] = useState<string>("");
  const { data, error, loading, pagesCount } = useMovieSearch(query, page);

  const onInputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchInput(e.target.value);
  };

  const onSubmitSearch = () => {
    setQuery(searchInput);
  };

  return (
    <React.Fragment>
      <StyledInput>
        <Input
          onChange={onInputChange}
          placeholder="Type to search for movie..."
        />
        <Button onClick={onSubmitSearch} color="secondary">
          Search
        </Button>
      </StyledInput>
      {loading ? (
        <StyledSpinner />
      ) : error ? (
        <Alert color="danger">{error}</Alert>
      ) : data && data.length === 0 ? (
        <Alert color="info">No results found</Alert>
      ) : (
        data && (
          <MoviesList
            movies={data}
            page={page}
            pagesCount={pagesCount}
            setPage={setPage}
          />
        )
      )}
    </React.Fragment>
  );
};

export default MovieSearch;
