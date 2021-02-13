import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import ImageTile from "../../ui/image/Tile";
import { APP_URL } from "../../setup/config/env";
import { Grid, GridCell } from "../../ui/grid";

const MenSurvey = () => {
  return (
    <GridCell class='mens-survey'>
      <Helmet>
        <title> Choose Your Style Survey - Crate</title>
      </Helmet>
      <Grid
        gutter={true}
        alignCenter={true}
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
        }}>
        <GridCell justifyCenter={true}>
          <p style={{ padding: "2%", textAlignLast: "center" }}>
            What shirt would you wear on a night out?
          </p>
          <form
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "row",
            }}>
            <div
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                alignItems: "center",
              }}>
              <ImageTile
                width={300}
                height={300}
                image={` ${APP_URL}/images/survey-pics/mens-survey/goth-top.jpg`}
                margin={10}
              />
              <input
                name='tops'
                className='radio-btn'
                type='radio'
                value='goth'></input>
            </div>
            <div
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                alignItems: "center",
              }}>
              <ImageTile
                width={300}
                height={300}
                image={` ${APP_URL}/images/survey-pics/mens-survey/sport-top.jpg`}
                margin={10}
              />
              <input
                name='tops'
                className='radio-btn'
                type='radio'
                value='sport'></input>
            </div>
            <div
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                alignItems: "center",
              }}>
              <ImageTile
                width={300}
                height={300}
                image={` ${APP_URL}/images/survey-pics/mens-survey/beach-top.jpg`}
                margin={10}
              />
              <input
                name='tops'
                className='radio-btn'
                type='radio'
                value='beach'></input>
            </div>
          </form>

          <p style={{ padding: "2%", textAlignLast: "center" }}>
            Which Bottoms would you wear on a night out?
          </p>
          <form
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "row",
            }}>
            <div
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                alignItems: "center",
              }}>
              <ImageTile
                width={300}
                height={300}
                image={` ${APP_URL}/images/survey-pics/mens-survey/goth-bottoms.jpg`}
                margin={10}
              />
              <input
                name='bottoms'
                className='radio-btn'
                type='radio'
                value='goth'></input>
            </div>
            <div
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                alignItems: "center",
              }}>
              <ImageTile
                width={300}
                height={300}
                image={` ${APP_URL}/images/survey-pics/mens-survey/sport-bottoms.jpg`}
                margin={10}
              />
              <input
                name='bottoms'
                className='radio-btn'
                type='radio'
                value='sport'></input>
            </div>
            <div
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                alignItems: "center",
              }}>
              <ImageTile
                width={300}
                height={300}
                image={` ${APP_URL}/images/survey-pics/mens-survey/beach-bottoms.jpg`}
                margin={10}
              />
              <input
                name='bottoms'
                className='radio-btn'
                type='radio'
                value='beach'></input>
            </div>
          </form>
          <p style={{ padding: "2%", textAlignLast: "center" }}>
            Which shoes would you wear on a daily basis
          </p>
          <form
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "row",
            }}>
            <div
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                alignItems: "center",
              }}>
              <ImageTile
                width={300}
                height={300}
                image={` ${APP_URL}/images/survey-pics/mens-survey/goth-shoes.jpg`}
                margin={10}
              />
              <input
                name='shoes'
                className='radio-btn'
                type='radio'
                value='goth'></input>
            </div>
            <div
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                alignItems: "center",
              }}>
              <ImageTile
                width={300}
                height={300}
                image={` ${APP_URL}/images/survey-pics/mens-survey/sport-shoes.jpg`}
                margin={10}
              />
              <input
                name='shoes'
                className='radio-btn'
                type='radio'
                value='sport'></input>
            </div>
            <div
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                alignItems: "center",
              }}>
              <ImageTile
                width={300}
                height={300}
                image={` ${APP_URL}/images/survey-pics/mens-survey/beach-shoes.jpg`}
                margin={10}
              />
              <input
                name='shoes'
                className='radio-btn'
                type='radio'
                value='beach'></input>
            </div>
          </form>
          <p style={{ padding: "2%", textAlignLast: "center" }}>
            Which hat would you wear under the hot sun?
          </p>
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
  );
};

export default MenSurvey;
