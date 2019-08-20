import React, { useState } from 'react';
import HallOfFameList from './HallOfFameList';
import { Tile } from 'carbon-components-react';
import { TextInput } from 'carbon-components-react';

import './_hall-of-fame-page.scss';

const HallOfFamePage = () => {
  const [filter, setFilter] = useState(
    'org:carbon-design-system type:pr is:closed step+5+Hursley'
  );

  return (
    <div className="bx--grid bx--grid--full-width bx--grid--no-gutter">
      <div className="hof-page__banner">
        <div className="bx--row">
          <div className="bx--col-lg-16">
            <h1 className="hof-page__heading">
              Carbon Developer Essentials Hall of Fame
            </h1>
          </div>
        </div>
        <div className="bx--row">
          <div className="bx--offset-lg-4 bx--col-lg-4 ">
            <Tile className="hof-page__banner-tile">
              <p className="hof-page__banner-text">
                These folks got one of these...
              </p>
              <img
                className="hof-page__image"
                src={`${process.env.PUBLIC_URL}/carbon-badge.png`}
                alt="Carbon developer essentials react badge"
              />
            </Tile>
          </div>
          <div className="bx--col-lg-4 ">
            <Tile className="hof-page__banner-tile">
              <img
                className="hof-page__image"
                src={`${process.env.PUBLIC_URL}/carbon-tee.png`}
                alt="Carbon t-shirt"
              />
              <p className="hof-page__banner-text hof-page__right">
                ...and one of these.
              </p>
            </Tile>
          </div>
        </div>
        <div className="bx--row">
          <div className="bx--offset-lg-4 bx--col-lg-8">
            <TextInput
              id="filter-id"
              labelText="Filter"
              value={filter}
              onChange={e => {
                setFilter(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <HallOfFameList filter={filter} />
    </div>
  );
};

export default HallOfFamePage;
