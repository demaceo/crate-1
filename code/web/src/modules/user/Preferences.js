// Imports
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import ImageTile from '../../ui/image/Tile'

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
    return (
      <GridCell>
        <Helmet>
          <title> Choose Your Style Survey - Crate</title>
        </Helmet>
        <Grid gutter={true} alignCenter={true}
          style={{display:'flex',
            flex: 1,
            flexDirection:'column',
            marginTop:'15vh'}}
            >
          <p style={{padding: "2%"}}>Please Choose a Shirt</p>
          <p style={{padding: "2%"}}>Which Bottoms would you wear on a night out?</p>
          <p style={{padding: "2%"}}>Which shoes would you wear on a dialy basis</p>
          <p style={{padding: "2%"}}>Which hat would you wear under the hot sun?</p>
          <GridCell justifyCenter={true}>
            <ImageTile width={300} height={530} />
          </GridCell>
          <GridCell>
            <Grid>
              <GridCell justifyCenter={true}>
                <ImageTile width={170} height={250} />
              </GridCell>
            </Grid>
            <Grid>
              <GridCell justifyCenter={true}>
                <ImageTile width={170} height={250} />
              </GridCell>
            </Grid>
          </GridCell>
        </Grid>
      </GridCell>
    )
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
