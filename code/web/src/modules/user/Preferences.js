// Imports
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import ImageTile from "../../ui/image/Tile";
import { APP_URL } from "../../setup/config/env";
import MenSurvey from "./MenSurvey";
import WomenSurvey from "./WomenSurvey";

// UI Imports
import { Grid, GridCell } from "../../ui/grid";
import { assignStyleType } from "./api/actions";

// Component
class Preferences extends PureComponent {
  // Runs on server only for SSR
  static fetchData({ store }) {
    // return store.dispatch(getListByUser());
  }
  constructor(props) {
    super(props);
  }

  handleClick = (e) => {
    e.preventDefault();

    let selectedStyles = [];

    let allRadioBtns = document.getElementsByClassName("radio-btn");
    for (let i = 0, length = allRadioBtns.length; i < length; i++) {
      if (allRadioBtns[i].checked) {
        selectedStyles.push(allRadioBtns[i].value);
      }
    }
    console.log(selectedStyles);
    // this.sendSurveyResultsToApi(selectedStyles);
    console.log(this.props);
    let stylesString = selectedStyles.join(", ");

    assignStyleType({
      id: 2,
      style: JSON.stringify(stylesString),
      survey: true,
    });
  };

  // chooseSurveyByGender = (gender) => {
  //   if (gender === "Women") {
  //     return <WomenSurvey />;
  //   } else {
  //     return <MenSurvey />;
  //   }
  // };

  render() {
    return <WomenSurvey handleClick={this.handleClick} />;
  }
}

const mapStateToProps = (state) => {
  return {
    id: state.id,
    style: state.style,
    survey: state.survey,
  };
};

export default connect(mapStateToProps, { assignStyleType })(Preferences);

// Must retrieve style photos from backend (maybe a fetch request) or
// directly from store?
// will need to map over those photos and put them into Tile components?
// We would like 5 rows of images, (3 images per row)
// Images will be selectable
// There will be a "submit survey" button (this will change the route to /subscriptions)
// An array of ids will be sent to update the global state (store)
