// Imports
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

// UI Imports
import { Grid, GridCell } from "../../ui/grid";
import { H3 } from "../../ui/typography";
import { grey, grey2 } from "../../ui/common/colors";

// Component
class Preferences extends PureComponent {
  // Runs on server only for SSR
  static fetchData({ store }) {
    // return store.dispatch(getListByUser());
  }

  render() {
    return
      <GridCell>
        <Helmet>
          <title> Choose Your Style Survey - Crate</title>
        </Helmet>
        <Grid gutter={true} alignCenter={true}>
          <GridCell justifyCenter={true}>
            <ImageTile width={300} height={530} shadow={level1} />
          </GridCell>
          <GridCell>
            <Grid>
              <GridCell justifyCenter={true}>
                <ImageTile width={170} height={250} shadow={level1}/>
              </GridCell>
            </Grid>
            <Grid>
              <GridCell justifyCenter={true}>
                <ImageTile width={170} height={250} shadow={level1} image={`${APP_URL}/images/stock/women/3.jpg`}
                  style={{ marginTop: '1.9em' }} />
              </GridCell>
            </Grid>
          </GridCell>
        </Grid>
      </GridCell>
  }
}

// Must retrieve style photos from backend (maybe a fetch request) or
    // directly from store?
    // will need to map over those photos and put them into Tile components?
    // We would like 5 rows of images, (3 images per row)
    // Images will be selectable
    // There will be a "submit survey" button (this will change the route to /subscriptions)
    // An array of ids will be sent to update the global state (store)

export default Preferences;
