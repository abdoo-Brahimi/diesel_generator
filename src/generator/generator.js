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
const FanGrid = ({classes, cols=6, rows=3, color="black"}) => (
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
                        <div className={classes.fanGrill} style={{backgroundColor:color}}/>
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
        {/* <SeparatorArea classes={classes}/> */}
        <RightArea classes={classes}/>
        {/* <RightMostArea classes={classes}/> */}
    </Grid>
)
const RightArea = ({classes})=>(
    <Grid item container direction="column" className={classes.rightArea}>
        <DeepSea classes={classes}/>
        <Grid item container style={{height:"40%", width: "100%"}}>
            <Thunder mode="on"/>
        </Grid>
    </Grid>
)
const DeepSea=({classes})=>(
    <Grid item container className={classes.deepSeaArea}>
        <Grid item container direction="column" className={classes.deepSea}>
            <DeepSeaTop classes={classes}/>
            <DeepSeaBottom classes={classes}/>
        </Grid>
    </Grid>
)
const DeepSeaTop=({classes})=>(
    <Grid item container className={classes.deepSeaTop}>
        <DeepSeaControls classes={classes}/>
        <DeepSeaScreenArea classes={classes}/>
    </Grid>
)
const DeepSeaScreenArea=({classes})=>(
    <Grid item container direction="column" className={classes.screenArea}>
        <Grid item className={classes.screenAreaTop}/>
        <Grid item container style={{height:"70%"}}>
            <Grid item className={classes.screen}/>
            <Grid item container style={{width: "35%", height: "100%"}}>
                <div style={{width:"95%", height:"15%", border:"1px solid #333333",backgroundColor:"white"}}/>
                <div style={{width:"95%", height:"15%", border:"1px solid #333333",backgroundColor:"white"}}/>
                <div style={{width:"95%", height:"15%", border:"1px solid #333333",backgroundColor:"white"}}/>
            </Grid>
            
        </Grid>
    </Grid>
)
const DeepSeaControls=({classes})=>(
    <Grid item container direction="column" className={classes.controls}>
        <Grid item container style={{height: "33.33%", width:"100%", paddingLeft:"6px"}}>
            <DeepSeaButton classes={classes} inside={classes.arrowUp}/>
        </Grid>
        <Grid item container style={{height: "33.33%", width:"100%"}}>
            <DeepSeaButton classes={classes} inside={classes.arrowLeft}/>
            <DeepSeaButton classes={classes} inside={classes.noArrow}/>
            <DeepSeaButton classes={classes} inside={classes.arrowRight}/>
            
        </Grid>
        <Grid item container style={{height: "33.33%", width:"100%", paddingLeft:"6px"}}>
            <DeepSeaButton classes={classes} inside={classes.arrowBottom}/>
        </Grid>
    </Grid>
)
const DeepSeaButton=({classes, inside=classes.noArrow, color="black", space})=>(
    <Grid item container className={classes.button} style={{backgroundColor:color, marginRight:space}}>
        <Grid item className={inside}/>
    </Grid>
)
const DeepSeaBottom=({classes})=>(
    <Grid item container className={classes.deepSeaBottom}>
        <DeepSeaButton classes={classes} color="red" space="5px"/>
        <DeepSeaButton classes={classes} space="5px"/>
        <DeepSeaButton classes={classes} space="5px" />
        <DeepSeaButton classes={classes} space="5px"/>
        <DeepSeaButton classes={classes} space="5px"/>
        <DeepSeaButton classes={classes} color="green"/>
    </Grid>
)
const RightMostArea = ({classes})=>(
    <Grid item container direction="column" className={classes.rightMostArea} >
        {/* <Grid item container className={classes.powerFuel}/>
        <Grid item container className={classes.rightDoor}/> */}
        
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
         {/* <Grid item style={{height:"7%"}}/> */}
         <LeftHinge classes={classes}/>
         <Fuel />
         {/* <Grid item container direction="column" justify="space-between" alignItems="flex-end" style={{height:"86%"}}> */}
            
            <LeftHinge classes={classes}/>
         {/* </Grid> */}

         {/* <Grid item style={{height:"7%"}}/> */}
    </Grid>
)
const BottomArea = ({classes})=>(
    <Grid item  container className={classes.bottom}>
        
    </Grid>
)
const Generate = ({classes})=>(
    <Grid container className={classes.container}>
        <TopCurve classes={classes}/>
        <MainArea classes={classes}/>
        <BottomArea classes={classes}/>
    </Grid>
)
const BotStyle=({classes, width})=>(
    <Grid item classes={classes.botStyle}/>
)
const Thunder = ({mode="on"})=>(
<Grid item container style={{paddingLeft:"20%"}}>
<svg  width="60%" height="80%" viewBox="0 0 512 512">
    <path style={{fill:(mode=="on"? "F1FF6E" :"#E0E0E0")}} d="M397.241,176.552H276.303L388.414,0H247.172L114.759,264.828h104.166L114.759,512L397.241,176.552z"
    />
    <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
</svg>
</Grid>
)
const Fuel = ({full="30"})=>(
<Grid item container style={{width:"60%", margin:"auto"}}>

<svg  viewBox="0 0 384 384" width="100%" height="100%">
    <defs>
        <linearGradient id="fuel" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0%" />
            <stop offset={full+"%"} stopColor="#000000" stopOpacity="0%"/>
            <stop offset= {full+"%"} stopColor="#999999" stopOpacity="0%"/>
            {/* <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0%" /> */}
        </linearGradient>

    </defs>
    <g>
        <g>
            <path 
                fill="url(#fuel)"
                d="M352.427,90.24l0.32-0.32L273.28,10.667L250.667,33.28l45.013,45.013c-20.053,7.68-34.347,26.987-34.347,49.707
                c0,29.44,23.893,53.333,53.333,53.333c7.573,0,14.827-1.6,21.333-4.48v153.813C336,342.4,326.4,352,314.667,352
                c-11.733,0-21.333-9.6-21.333-21.333v-96c0-23.573-19.093-42.667-42.667-42.667h-21.333V42.667C229.333,19.093,210.24,0,186.667,0
                h-128C35.093,0,16,19.093,16,42.667V384h213.333V224h32v106.667c0,29.44,23.893,53.333,53.333,53.333
                c29.44,0,53.333-23.893,53.333-53.333V128C368,113.28,362.027,99.947,352.427,90.24z M186.667,149.333h-128V42.667h128V149.333z
                M314.667,149.333c-11.733,0-21.333-9.6-21.333-21.333s9.6-21.333,21.333-21.333c11.733,0,21.333,9.6,21.333,21.333
                S326.4,149.333,314.667,149.333z"/>
        </g>
    </g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    </svg>
</Grid>
)


export default withStyles(styles)(Generate);