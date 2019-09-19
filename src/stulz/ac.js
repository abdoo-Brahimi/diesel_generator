import React from "react";
import Fan from './fan.svg'
import { withStyles } from "@material-ui/core/styles";
import Logo from './stulz.svg'
import { Grid, GridList, GridListTile } from "@material-ui/core";
import {AnimateKeyframes} from 'react-simple-animate'
const cabinetColor = "#333333"
const doorColor = "#444444"
const allMaxWidth = "300px"
const styles = theme => ({
    acCabinet:{
        backgroundColor: cabinetColor ,
        maxWidth: allMaxWidth,
        padding:"5px",
        paddingTop:"0"
    },
    acDoor:{
        backgroundColor: doorColor,
        border: "1px solid black",
        borderWidth: "0 1px 1px 1px",
        height: "220px"
    },
    acPoint:{ 
        backgroundColor: "#000000",
        width: "5px",
        height: "5px",
        borderRadius: "50%",
        marginTop: "20px",
        marginLeft: "10px"
    },

    acHinge:{
        backgroundColor: "#000000",
        width: "3px",
        height: "10px",
        marginTop: "18px",
        // marginRight: "0px",
        // marginLeft: "0px",
        borderRadius: "3px 0 0 3px"
    },
    acPanelContainer:{
        marginLeft: "30%",
    },
    acPanel:{
        backgroundColor: "#eeeeee",
        height: "30px",
        borderBottom: "1px solid black",

    },
    acPanelScreen:{
        backgroundColor: "#D0F7FF",
        width: "80%",
        height: "15px",
        margin: "auto",
        marginTop: "7px",
        border: "1px solid #e3e3e3"
    },

    stulzLogo:{
        width: "20px",
        display: "block",
        margin: "auto"
    }, 

    acOpenButtonSquare:{
        width: "10px",
        height: "10px",
        borderRadius: "2px",
        backgroundColor: "#FFFD3F",
        marginTop: "60px"
    }, 
    acHandle:{
        backgroundColor: "#FF0B0B",
        width: "4px",
        height: "4px",
        borderRadius: "50%",
        margin: "auto",
        marginTop: "3px"
    },
    acFansContainer:{
        backgroundColor: cabinetColor,
        padding: "5px",
        maxWidth: allMaxWidth,
        border: "1px solid black"
    },
    acFan:{
        border: "2px solid black",
        // width: "50px",
        // margin: "1px",
        height: "40px",
        backgroundColor: "#777777",
        display: "grid"
    },
    fanGrill:{
        backgroundColor: "transparent",
        border: "1px solid #999999",
        height: "100%"
    },
    fanGrid:{
        gridRow:1,
        gridColumn:1,
        zIndex: 1
    },
    fanLogoContainer:{
        gridRow: 1,
        gridColumn: 1,
        zIndex: 0
    },
    fanLogo:{
        height: "30px",
        margin : "auto"

    }
  });


const AcPanel= ({classes}) => (
    <Grid container item xs={4} direction="column" className={classes.acPanelContainer}>
        <Grid item className={classes.acPanel}>
            <img src={Logo} alt="" className={classes.stulzLogo}/>
        </Grid>
        <Grid item className={classes.acPanel}>
            <div className={classes.acPanelScreen}/>
        </Grid>
        <Grid item className={classes.acPanel}/>
    </Grid>
)
const AcDoor = ({classes, role="secondary"}) => (
    <Grid container item xs direction="column" className={classes.acDoor}>
        <Grid container item xs justify="space-between">
            <Grid item className={classes.acPoint}/>

            {(role==="main") ?
                 <React.Fragment>
                    <Grid item className={classes.acOpenButtonSquare}>
                        <div className={classes.acHandle}/>
                    </Grid>
                    <AcPanel classes={classes}/>

                 </React.Fragment>
                 :""}
            <Grid item className={classes.acHinge}/>
        </Grid>
        <Grid container item xs justify="space-between" alignItems="center">
            <Grid item className={classes.acPoint}/>
            <Grid item className={classes.acHinge}/>
        </Grid>
    </Grid>
)
const AcFan = ({classes}) => (
    <Grid container item xs={4} className={classes.acFan}>
        <Grid item container xs={12} className={classes.fanGrid}>
            <FanGrid classes={classes} />
        </Grid>
        <Grid item container xs={12} className={classes.fanLogoContainer}>
            <AnimateKeyframes 
                play={true}
                iterationCount = "infinite"
                duration = {4}
                keyframes={
                    [
                        "transform : rotate(0deg);margin: auto",
                        "transform: rotate(360deg);margin: auto"
                    ]
                }
                fillMode = "both"
            >
                <img src={Fan} alt ="" className={classes.fanLogo}/>
            </AnimateKeyframes>
                
        </Grid>
    </Grid>
)


const FanGrid = ({classes, cols=12, rows=4}) => (
    
        <GridList 
            cols={cols} 
            spacing={0}
            cellHeight={"auto"}
            style={{width:"100%"}}
            // classes={classes.fanGrid}
        >
            {
                [...Array(cols*rows)].map((square, index)=>(
                    <GridListTile key={index}>
                        <div className={classes.fanGrill}/>
                    </GridListTile>
                ))
            }
        </GridList>
    
)
const AC = ({classes}) => (
    <Grid container direction = "column" style={{margin:"10%"}}>
        <Grid container item xs={8} className={classes.acCabinet}>
            <AcDoor classes={classes}/>
            <AcDoor classes={classes}/>
            <AcDoor classes={classes} role="main"/>
        </Grid>
        <Grid container item xs={4} className={classes.acFansContainer}>
            <AcFan classes={classes}/>
            <AcFan classes={classes}/>
            <AcFan classes={classes}/>
        </Grid>
    </Grid>

)



export default withStyles(styles)(AC);