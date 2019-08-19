import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import { ClickableTile } from 'carbon-components-react';

const HallOfFameList = props => {
  const HOF_QUERY = gql`
    query HOF_QUERY($filter: String!) {
      search(query: $filter, type: ISSUE, first: 100) {
        edges {
          node {
            ... on PullRequest {
              repository {
                nameWithOwner
              }
              headRefName
              number
              url
              author {
                avatarUrl
                login
                url
              }
            }
          }
        }
      }
    }
  `;

  return (
    <div className="bx--row hof-page__content">
      <div className="bx--col-lg-8 bx--offset-lg-4">
        <ul className="hof-page__list">
          <Query
            query={HOF_QUERY}
            variables={{
              filter: props.filter,
            }}>
            {({ loading, error, data: { search } }) => {
              // Wait for the request to complete
              if (loading) return <div>Loading...</div>;

              // Something went wrong with the data fetching
              if (error) return `Error! ${error.message}`;

              // // If we're here, we've got our data!
              // console.log(search);

              return (
                <>
                  {search.edges.map((edge, index) => {
                    return (
                      <li key={index} className="hof-page__list-item">
                        <ClickableTile
                          className="hof-page__tile"
                          href={edge.node.url}>
                          <h2>{edge.node.author.login}</h2>
                          <p>{edge.node.closedAt}</p>
                          <img
                            src={edge.node.author.avatarUrl}
                            className="hof-page__tile-image"
                            alt={edge.node.author.login}
                          />
                        </ClickableTile>
                      </li>
                    );
                  })}
                </>
              );
            }}
          </Query>
        </ul>
      </div>
    </div>
  );
};

export default HallOfFameList;
