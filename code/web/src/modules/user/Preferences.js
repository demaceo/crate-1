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

  // Runs on client only
  // componentDidMount() {
  //   this.props.getListByUser();
  // }

  render() {
    return <div>Hello friends</div>;
  }
}

// Component Properties
// Preferences.propTypes = {
//   preferences: PropTypes.object.isRequired,
//   getListByUser: PropTypes.func.isRequired,
// };

// Component State
// function preferencesState(state) {
//   return {
//     subscriptions: state.preferencesByUser,
//   };
// }

export default Preferences;
