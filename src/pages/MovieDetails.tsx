import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Spinner,
  Alert,
} from "reactstrap";
import { get } from "lodash";
import React from "react";
import styled from "styled-components";

import useMovieDetails from "api/useMovieDetails";
import margins from "assets/margins";

const StyledSpinner = styled(Spinner)`
  height: "100px";
  width: "100px";
`;

const StyledCardBody = styled(CardBody)`
  display: flex;
  flex-direction: row;
`;

const CardContainer = styled.div`
  flex: 1;
  margin-left: ${margins.m};
`;

const MovieDetails: React.FC = (props) => {
  const id = get(props, "match.params.id");
  const { data, loading, error } = useMovieDetails(id);

  return (
    <React.Fragment>
      <Card>
        {loading ? (
          <StyledSpinner />
        ) : error ? (
          <Alert color="danger">{error}</Alert>
        ) : (
          data && (
            <React.Fragment>
              <StyledCardBody>
                <img src={data.image} alt={data.title} />
                <CardContainer>
                  <CardTitle tag="h5">{data.title}</CardTitle>
                  <CardText>Actors: {data.actors}</CardText>
                  <CardText>Plot: {data.plot}</CardText>
                  <CardText>Year: {data.year}</CardText>
                  <CardText>Rating: {data.rating}</CardText>
                  <CardText>Released: {data.released}</CardText>
                  <CardText>Runtime: {data.runtime}</CardText>
                </CardContainer>
              </StyledCardBody>
            </React.Fragment>
          )
        )}
      </Card>
    </React.Fragment>
  );
};

export default MovieDetails;
