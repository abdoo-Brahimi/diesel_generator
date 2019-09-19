import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, GridList, GridListTile} from "@material-ui/core";
import styles from "./styles"



const RightHinge = ({classes}) => (
    <Grid container item  direction="column" justify="space-between" className={classes.rightHinge}>
        <div className={classes.hingePoint}/>
        <div className={classes.hingePoint}/>
    </Grid>
)
// const LeftDoor = ({classes, xs}) =>(
//     <Grid item container xs={xs} direction="column"  className={classes.leftDoor}>
//         <Grid item container xs={12} direction="column" justify="space-between">
//             <RightHinge classes={classes}/>
//             <RightHinge classes={classes}/>
//         </Grid>
//         <Grid item container xs={12} spacing={0} justify="felx-start">
//             <FanGrid classes={classes}/>
//         </Grid>
//         <DoorHandle xs={12} classes={classes}/>        
//     </Grid>
// )

// const DoorHandle = ({classes, xs}) =>(
//     <Grid item xs={xs} container  className={classes.doorHandleContainer}>
//         <Grid container item xs={10} className={classes.doorHandle}/>
//     </Grid>
// )
const FanGrid = ({classes, cols=6, rows=3}) => (
    <Grid item container justify="center" alignItems="center" className={classes.fanArea}>
        <GridList 
            cols={cols} 
            spacing={0}
            cellHeight={"auto"}
            
            className={classes.fanGrid}
        >
            {
                [...Array(cols*rows)].map((square, index)=>(
                    <GridListTile key={index}>
                        <div className={classes.fanGrill}/>
                    </GridListTile>
                ))
            }
        </GridList>
    </Grid>   


)

const TopCurve = ({classes})=>(
    <Grid item container className={classes.top}/>
)
const MainArea = ({classes})=>(
    <Grid item  container className={classes.middle}>
        <LeftMostArea classes={classes}/>
        <LeftArea classes={classes}/>
        <SeparatorArea classes={classes}/>
        <RightArea classes={classes}/>
        <RightMostArea classes={classes}/>
    </Grid>
)
const RightArea = ({classes})=>(
    <Grid item container className={classes.rightArea}/>
)

const RightMostArea = ({classes})=>(
    <Grid item container className={classes.rightMostArea} >
        <Grid item container className={classes.powerFuel}/>
        <Grid item container className={classes.rightDoor}/>
    </Grid>
)
const SeparatorArea = ({classes})=>(
    <Grid item className={classes.separatorArea}>
    
    </Grid>    
)
const LeftArea = ({classes})=>(
    <Grid item container direction="column" className={classes.leftSide}>
        <Grid item className={classes.uselessBar}/>
        <LeftDoor classes={classes}/>
        <Grid item className={classes.uselessBar}/>
    </Grid>
)
const LeftDoor = ({classes})=>(
    <Grid item container direction="column" justify="space-between" className={classes.leftDoor}>
        <RightHinge classes={classes}/>
        <LeftDoorHandle classes={classes}/>
        <FanGrid classes={classes}/>
        <RightHinge classes={classes}/>
    </Grid>
)

const LeftDoorHandle = ({classes})=>(
    <Grid item container justify="flex-end" alignItems="flex-end" className={classes.doorHandleArea}>
        <Grid item container justify="center" alignItems="center" className={classes.doorHandle}>
            <Grid item container justify="space-between" alignItems="center" className={classes.doorHandleInside}>
                <Grid item className={classes.hingePoint}/>
                <Grid item className={classes.doorHandleOpen}/>
            </Grid>
        </Grid>
    </Grid>
)
const LeftHinge = ({classes}) => (
    <Grid container  item direction="column" justify="space-between" className={classes.leftHinge}>
        <Grid item className={classes.hingePoint}/>
        <Grid item className={classes.hingePoint}/>
    </Grid>
)
const LeftMostArea = ({classes})=>(
    <Grid 
        item 
        container 
        direction="column" 
        justify="space-between"
        alignItems="flex-end" 
        className={classes.leftMostArea}
    >
         <Grid item style={{height:"7%"}}/>
         <Grid item container direction="column" justify="space-between" alignItems="flex-end" style={{height:"86%"}}>
            <LeftHinge classes={classes}/>
            <LeftHinge classes={classes}/>
         </Grid>

         <Grid item style={{height:"7%"}}/>
    </Grid>
)
const BottomArea = ({classes})=>(
    <Grid item  container className={classes.bottom}/>
)
const Generate = ({classes})=>(
    <Grid container className={classes.container}>
        <TopCurve classes={classes}/>
        <MainArea classes={classes}/>
        <BottomArea classes={classes}/>
    </Grid>
)

export default withStyles(styles)(Generate);