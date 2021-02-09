// Imports
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import ImageTile from "../../ui/image/Tile";
import { APP_URL } from "../../setup/config/env";

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
      // <GridCell class="mens-survey">
      //   <Helmet>
      //     <title> Choose Your Style Survey - Crate</title>
      //   </Helmet>
      //   <Grid
      //     gutter={true}
      //     alignCenter={true}
      //     style={{
      //       display: "flex",
      //       flex: 1,
      //       flexDirection: "column",
      //     }}>
      //     <GridCell justifyCenter={true}>
      //       <p style={{ padding: "2%", textAlignLast: "center" }}>What shirt would you wear on a night out?</p>
      //       <form
      //         style={{
      //           display: "flex",
      //           flex: 1,
      //           flexDirection: "row",
      //         }}>
      //         <div
      //           style={{
      //             display: "flex",
      //             flex: 1,
      //             flexDirection: "column",
      //             alignItems: "center",
      //           }}>
      //           <ImageTile
      //             width={300}
      //             height={300}
      //             image={` ${APP_URL}/images/survey-pics/mens-survey/goth-top.jpg`}
      //             margin={10}
      //           />
      //           <input name='tops' id='goth-top' type='radio'></input>
      //         </div>
      //         <div
      //           style={{
      //             display: "flex",
      //             flex: 1,
      //             flexDirection: "column",
      //             alignItems: "center",
                  
      //           }}>
      //           <ImageTile
      //             width={300}
      //             height={300}
      //             image={` ${APP_URL}/images/survey-pics/mens-survey/sport-top.jpg`}
      //             margin={10}
      //           />
      //           <input name='tops' id='goth-top' type='radio'></input>
      //         </div>
      //         <div
      //           style={{
      //             display: "flex",
      //             flex: 1,
      //             flexDirection: "column",
      //             alignItems: "center",
                 
      //           }}>
      //           <ImageTile
      //             width={300}
      //             height={300}
      //             image={` ${APP_URL}/images/survey-pics/mens-survey/beach-top.jpg`}
      //             margin={10}
      //           />
      //           <input name='tops' id='beach-top' type='radio'></input>
      //         </div>
      //       </form>

      //       <p style={{ padding: "2%", textAlignLast: "center" }}>
      //         Which Bottoms would you wear on a night out?
      //       </p>
      //       <form
      //         style={{
      //           display: "flex",
      //           flex: 1,
      //           flexDirection: "row",
  
      //         }}>
      //         <div
      //           style={{
      //             display: "flex",
      //             flex: 1,
      //             flexDirection: "column",
      //             alignItems: "center",
                  
      //           }}>
      //           <ImageTile
      //             width={300}
      //             height={300}
      //             image={` ${APP_URL}/images/survey-pics/mens-survey/goth-bottoms.jpg`}
      //             margin={10}
      //           />
      //           <input name='bottoms' id='goth-bottom' type='radio'></input>
      //         </div>
      //         <div
      //           style={{
      //             display: "flex",
      //             flex: 1,
      //             flexDirection: "column",
      //             alignItems: "center",
      //           }}>
      //           <ImageTile
      //             width={300}
      //             height={300}
      //             image={` ${APP_URL}/images/survey-pics/mens-survey/sport-bottoms.jpg`}
      //             margin={10}
      //           />
      //           <input name='bottoms' id='sport-bottom' type='radio'></input>
      //         </div>
      //         <div
      //           style={{
      //             display: "flex",
      //             flex: 1,
      //             flexDirection: "column",
      //             alignItems: "center",
      //           }}>
      //           <ImageTile
      //             width={300}
      //             height={300}
      //             image={` ${APP_URL}/images/survey-pics/mens-survey/beach-bottoms.jpg`}
      //             margin={10}
      //           />
      //           <input name='bottoms' id='beach-bottom' type='radio'></input>
      //         </div>
      //       </form>
      //       <p style={{ padding: "2%", textAlignLast: "center" }}>
      //         Which shoes would you wear on a daily basis
      //       </p>
      //       <form
      //         style={{
      //           display: "flex",
      //           flex: 1,
      //           flexDirection: "row",
      //         }}>
      //         <div
      //           style={{
      //             display: "flex",
      //             flex: 1,
      //             flexDirection: "column",
      //             alignItems: "center",                  
      //           }}>
      //           <ImageTile
      //             width={300}
      //             height={300}
      //             image={` ${APP_URL}/images/survey-pics/mens-survey/goth-shoes.jpg`}
      //             margin={10}
      //           />
      //           <input name='shoes' id='goth-shoes' type='radio'></input>
      //         </div>
      //         <div
      //           style={{
      //             display: "flex",
      //             flex: 1,
      //             flexDirection: "column",
      //             alignItems: "center",               
      //           }}>
      //           <ImageTile
      //             width={300}
      //             height={300}
      //             image={` ${APP_URL}/images/survey-pics/mens-survey/sport-shoes.jpg`}
      //             margin={10}
      //           />
      //           <input name='shoes' id='sport-shoes' type='radio'></input>
      //         </div>
      //         <div
      //           style={{
      //             display: "flex",
      //             flex: 1,
      //             flexDirection: "column",
      //             alignItems: "center",                
      //           }}>
      //           <ImageTile
      //             width={300}
      //             height={300}
      //             image={` ${APP_URL}/images/survey-pics/mens-survey/beach-shoes.jpg`}
      //             margin={10}
      //           />
      //           <input name='shoes' id='beach-shoes' type='radio'></input>
      //         </div>
      //       </form>
      //       <p style={{ padding: "2%", textAlignLast: "center" }}>
      //         Which hat would you wear under the hot sun?
      //       </p>
      //     </GridCell>
      //     <GridCell>
      //       <Grid>
      //         <GridCell justifyCenter={true}>
      //           <ImageTile width={170} height={250} />
      //         </GridCell>
      //       </Grid>
      //       <Grid>
      //         <GridCell justifyCenter={true}>
      //           <ImageTile width={170} height={250} />
      //         </GridCell>
      //       </Grid>
      //     </GridCell>
      //   </Grid>
      // </GridCell>
      <GridCell class="womens-survey">
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
            <p style={{ padding: "2%", textAlignLast: "center" }}>Which Shirt would you wear to the club?</p>
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
                <input name='tops' id='goth-top' type='radio'></input>
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
                <input name='tops' id='goth-top' type='radio'></input>
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
                <input name='tops' id='beach-top' type='radio'></input>
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
                <input name='bottoms' id='goth-bottom' type='radio'></input>
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
                <input name='bottoms' id='sport-bottom' type='radio'></input>
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
                <input name='bottoms' id='beach-bottom' type='radio'></input>
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
                <input name='shoes' id='goth-shoes' type='radio'></input>
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
                <input name='shoes' id='sport-shoes' type='radio'></input>
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
                <input name='shoes' id='beach-shoes' type='radio'></input>
              </div>
            </form>
            <p style={{ padding: "2%", textAlignLast: "center"}}>
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
                <input name='shoes' id='goth-shoes' type='radio'></input>
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
                <input name='shoes' id='sport-shoes' type='radio'></input>
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
                <input name='shoes' id='beach-shoes' type='radio'></input>
              </div>
            </form>
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
