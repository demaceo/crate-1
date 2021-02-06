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
    // Must retrieve style photos from backend (maybe a fetch request) or
    // directly from store?
    // will need to map over those photos and put them into Tile components?
    // We would like 5 rows of images, (3 images per row)
    // Images will be selectable
    // There will be a "submit survey" button (this will change the route to /subscriptions)
    // An array of ids will be sent to update the global state (store)
    return <div>Hello friends</div>;
  }
}

export default Preferences;
