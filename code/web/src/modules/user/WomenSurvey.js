import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import ImageTile from "../../ui/image/Tile";
import { APP_URL } from "../../setup/config/env";
import { Grid, GridCell } from "../../ui/grid";

const WomenSurvey = (props) => {
  // const { handleClick } = props.handleClick;
  // console.log(props.handleClick);
  return (
    <GridCell
      className='womens-survey'
      style={{ display: "flex", alignItems: "center", flexFlow: "column" }}>
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
            Which Shirt would you wear to the club?
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
                image={` ${APP_URL}/images/survey-pics/womens-survey/goth-top.jpg`}
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
                image={` ${APP_URL}/images/survey-pics/womens-survey/sport-top.jpg`}
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
                image={` ${APP_URL}/images/survey-pics/womens-survey/beach-top.jpg`}
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
                image={` ${APP_URL}/images/survey-pics/womens-survey/goth-bottoms.jpg`}
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
                image={` ${APP_URL}/images/survey-pics/womens-survey/sport-bottoms.jpg`}
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
                image={` ${APP_URL}/images/survey-pics/womens-survey/beach-bottoms.jpg`}
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
            Which shoes would you wear on a daily basis?
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
                image={` ${APP_URL}/images/survey-pics/womens-survey/goth-shoes.jpg`}
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
                image={` ${APP_URL}/images/survey-pics/womens-survey/sport-shoes.jpg`}
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
                image={` ${APP_URL}/images/survey-pics/womens-survey/beach-shoes.jpg`}
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
            Which accessory would you wear out on the town?
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
                image={` ${APP_URL}/images/survey-pics/womens-survey/goth-necklace.jpg`}
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
                image={` ${APP_URL}/images/survey-pics/womens-survey/sport-necklace.jpg`}
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
                image={` ${APP_URL}/images/survey-pics/womens-survey/beach-necklace.jpg`}
                margin={10}
              />
              <input
                name='shoes'
                className='radio-btn'
                type='radio'
                value='beach'></input>
            </div>
          </form>
        </GridCell>
      </Grid>
      <button
        style={{ height: "55px", width: "100px", margin: "10px" }}
        onClick={(event) => props.handleClick(event)}>
        Submit
      </button>
    </GridCell>
  );
};

export default WomenSurvey;
