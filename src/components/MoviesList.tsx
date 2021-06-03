import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { range } from "lodash";
import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

import { Movie } from "types/movieTypes";
import margins from "assets/margins";
import MovieCard from "components/MovieCard";

export interface MoviesListProps {
  movies: Movie[];
  page: number;
  pagesCount: number;
  setPage: Dispatch<SetStateAction<number>>;
}
const StyledPagination = styled(Pagination)`
  margin-top: ${margins.m};
`;

const StyledList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: ${margins.m};
  margin-bottom: ${margins.m};
`;

const MoviesList: React.FC<MoviesListProps> = ({
  movies,
  page,
  setPage,
  pagesCount,
}) => {
  const firstPage = page - 10 > 1 ? page - 10 : 1;
  const lastPage = page + 10 < pagesCount ? page + 10 : pagesCount;

  return (
    <React.Fragment>
      <StyledList>
        {movies.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </StyledList>
      <StyledPagination>
        {range(firstPage, lastPage).map((pageNumber: number) => (
          <PaginationItem key={pageNumber} active={page === pageNumber}>
            <PaginationLink onClick={() => setPage(pageNumber)}>
              {pageNumber}
            </PaginationLink>
          </PaginationItem>
        ))}
      </StyledPagination>
    </React.Fragment>
  );
};

export default MoviesList;
