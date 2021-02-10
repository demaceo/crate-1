// Imports
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import ImageTile from "../../ui/image/Tile";
import { APP_URL } from "../../setup/config/env";

// UI Imports
import { Grid, GridCell } from "../../ui/grid";

// Component
class Preferences extends PureComponent {
  // Runs on server only for SSR
  static fetchData({ store }) {
    // return store.dispatch(getListByUser());
  }

  // const reducer = (state, action) => {
  //   if () {
  //     return {
  //       loggedIn: true
  //     }
  //   }

  //   return state
  // }

  // const store = createStore(reducer);


  handleClick = (e) => {
    e.preventDefault()

    let selectedStyles = [];

    let allRadioBtns = document.getElementsByClassName('radio-btn');
    for (let i = 0, length = allRadioBtns.length; i < length; i++) {
      if (allRadioBtns[i].checked) {
        selectedStyles.push(allRadioBtns[i].value)
      }
    }
    console.log(selectedStyles)
  }

  
  //add id to the subscribe buttons 
  //grab the id on click
  //if the id === mens 
  //render the mens prefs
  //else render womens prefs 


  // determineStylePreference = (styleArray) => {
  //   let styleMap = {};

  //   if (styleArray.length == 0) {
  //     window.alert('error error')
  //     return null
  //   } else {

  //   }

  //   for(var i = 0; i < styleArray.length; i++) {
  //     if(!styleMap[styleArray[i]]) {
  //       styleMap[styleArray[i]] = 1;
  //     } else {
  //       styleMap[styleArray[i]] += 1;
  //     }
  //   }

  // }

  //add one more category to the survey 

  render() {
    //if mens id
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
      //           <input name='tops' className='radio-btn' type='radio' value='goth'></input>
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
      //            <input name='tops' className='radio-btn' type='radio' value='sport'></input>
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
      //           <input name='tops' className='radio-btn' type='radio' value='beach'></input>
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
      //           <input name='bottoms' className='radio-btn' type='radio' value='goth'></input>
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
      //           <input name='bottoms' className='radio-btn' type='radio' value='sport'></input>
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
      //           <input name='bottoms' className='radio-btn' type='radio' value='beach'></input>
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
      //          <input name='shoes' className='radio-btn' type='radio' value='goth'></input>
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
      //            <input name='shoes' className='radio-btn' type='radio' value='sport'></input>
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
      //           <input name='shoes' className='radio-btn' type='radio' value='beach'></input>
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

      //else return 
      <GridCell class="womens-survey" style={{ display: 'flex', alignItems: 'center', flexFlow: 'column' }}>
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
                <input name='tops' className='radio-btn' type='radio' value='goth'></input>
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
                <input name='tops' className='radio-btn' type='radio' value='sport'></input>
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
                <input name='tops' className='radio-btn' type='radio' value='beach'></input>
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
                <input name='bottoms' className='radio-btn' type='radio' value='goth'></input>
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
                <input name='bottoms' className='radio-btn' type='radio' vlaue='sport'></input>
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
                <input name='bottoms' className='radio-btn' type='radio' value='beach'></input>
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
                <input name='shoes' className='radio-btn' type='radio' value='goth'></input>
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
                <input name='shoes' className='radio-btn' type='radio' value='sport'></input>
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
                <input name='shoes' className='radio-btn' type='radio' value='beach'></input>
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
                <input name='shoes' className='radio-btn' type='radio' value='goth'></input>
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
                <input name='shoes' className='radio-btn' type='radio' value='sport'></input>
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
                <input name='shoes' className='radio-btn' type='radio' value='beach'></input>
              </div>
            </form>
          </GridCell>
        </Grid>
        <button
          style={{ height: '55px', width: '100px', margin: '10px' }}
          onClick={() => this.handleClick(event)}
        >Submit</button>
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
