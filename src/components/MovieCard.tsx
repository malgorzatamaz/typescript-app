import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

import { Movie } from "types/movieTypes";
import margins from "assets/margins";

export interface MovieCardProps {
  movie: Movie;
}

const StyledCard = styled(Card)`
  margin-bottom: ${margins.m};
  margin-right: ${margins.m};
  width: calc(20% - ${margins.m});
`;

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <StyledCard>
      <img src={movie.image} alt={movie.title} />
      <CardBody>
        <CardTitle tag="h6">{movie.title}</CardTitle>
        <CardText>{movie.year}</CardText>
        <Link to={`/movies/${movie.id}`}>Read more</Link>
      </CardBody>
    </StyledCard>
  );
};

export default MovieCard;
