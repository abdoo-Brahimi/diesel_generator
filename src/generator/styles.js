const getGray = (number) => "#"+number+number+number
const hingScale = (scale) => `${scale}+vw`
 const styles= theme => ({
    root:{
        felxGrow: 1
    },
    container:{
        // width: "30vw",
        // border: "1px solid black",
        // maxWidth: "600px",
        // height: "20vw",
        width: "280px",
        height: "200px",
        margin: "auto",
        marginTop: "25vw",
        marginBottom: "30vw"
    },
    middle:{
        backgroundColor: getGray("D0"),
        height: "77%",
    },
    bottom:{
        backgroundColor: getGray("50"),
        height: "15%"
    },
    top:{
        height: "8%",
        backgroundColor: getGray("EA"),
        borderRadius: "50px 50px 0 0"

    },
    leftMostArea:{
        width: "25%",
        border: "1px solid #E1E1E1",
        paddingTop: "27px",
        paddingBottom:"27px", 
    },
    leftDoor:{
        // border: "1px solid black",
        height: "86%",
        paddingBottom: "calc(17px)",
        paddingTop: "calc(17px)"
    },
    leftSide:{
        // border: "1px solid black",
        width: "30%",
        borderRight:"1px solid #E1E1E1"
    },
    // mainArea:{
    //     height:"92%",
    //     backgroundColor: getGray("E1")
    // },

    leftHinge:{
        backgroundColor: getGray("00"),
        height: "calc(15px + 0.2vw)",
        width: "calc(5px + 0.2vw)",
        borderRadius: "5px 0 0 5px",
        paddingTop: "2px",
        paddingBottom: "2px",
        paddingLeft: "2px"
    },
    hingePoint:{
        backgroundColor: getGray("E1"),
        height:"calc(2px + 0.1vw)",
        width:"calc(2px + 0.1vw)",
        borderRadius: "50%",
    },
    doorHandleOpen:{
        backgroundColor:"black",
        width: "50%",
        height: "70%",
        borderRadius: "3px 3px 3px 3px",
        border: "2px solid #D0D0D0",
        borderRight: "0",
        borderLeft: "1px solid #D0D0D0"
    },

    uselessBar:{
        height: "7%",
        borderBottom: "1px solid #E1E1E1",
        borderTop: "1px solid #E1E1E1"
    },
    rightHinge:{
        backgroundColor: getGray("00"),
        height: "calc(15px + 0.2vw)",
        width: "calc(5px + 0.2vw)",
        borderRadius: "0 5px 5px 0",
        paddingTop: "2px",
        paddingBottom: "2px",
        paddingLeft: "2px"
    },
    doorHandleArea:{
        height:"15%",
        marginTop:"5%"
    },
    doorHandle:{
        backgroundColor: "black",
        width: "25%",
        height: "100%",
        marginRight: "2px",
        borderRadius: "5px 5px 5px 5px"
    },
    doorHandleInside:{
        backgroundColor:"black",
        width: "90%",
        height: "85%",
        borderRadius: "5px 5px 5px 5px",
        border: "2px solid #D0D0D0",
        paddingLeft: "2px",
        paddingRight: "2px"
    },
    fanArea:{
        // backgroundColor:"white",
        height: "30%"
    },
     fanGrill:{
        backgroundColor: "black",
        border: "2px solid #D0D0D0",
        height: "80%",
        width:"80%",
        // borderRadius: "5px",
    },
    fanGrid:{
        height: "60%",
        // borderRadius: "12px 5px 5px 6px",
    },
    separatorArea:{
        width: "6%",
        border: "1px solid black"
    },
    rightArea:{
        width: "45%",
        // border:"1px solid black"
    },
    rightMostArea:{
        width: "4%",
        border: "1px solid black",
        borderLeft: "0",
        borderRight: "0"
    },
    powerFuel:{
        width: "20%",
        border: "1px solid black"
    },
    deepSeaArea:{
        height: "60%",
        // border: "1px solid black"
    },
    deepSea:{
        height: "50%",
        width: "70%",
        backgroundColor: "#333333",
        margin:"auto",
        borderRadius: "5px 5px 5px 5px",
        minWidth: "80px"
    },
    deepSeaTop:{
        height: "50%",
        border: "5px solid #333333",
        borderBottom: "1px solid #333333",
        borderRadius: "5px 5px 5px 5px",
        backgroundColor: "#202020"
    },
    deepSeaBottom:{
        height: "50%",
        border: "5px solid #333333",
        borderTop: "1px solid #333333",
        borderRadius: "5px 5px 5px 5px",
        backgroundColor: "#202020",
        padding:"6px",
        paddingLeft: "8px"
    },
    controls:{
        width: "30%",
        // border: "1px solid white",
        height: "100%",
        margin: "auto",
        paddingLeft :"2px",

    },
    arrowUp:{
        width:0,
        height: 0,
        borderLeft: "2px solid transparent",
        borderRight: "2px solid transparent",
        borderBottom: "3px solid white",
        margin: "auto",
        marginBottom: "3px"
    },
    button:{
        width: "5px",
        height: "5px",
        borderRadius: "50%",
        backgroundColor: "black",
        marginRight:"1px"
    },
    arrowLeft:{
        width:0,
        height: 0,
        borderRight: "3px solid white",
        borderTop: "2px solid transparent",
        borderBottom: "2px solid transparent",
        margin: "auto"
    },
    noArrow:{
        width: "3px",
        height: "3px",
        borderRadius: "50%",
        backgroundColor: "white",
        margin: "auto" 
    },
    arrowRight:{
        width:0,
        height: 0,
        borderLeft: "3px solid white",
        borderTop: "2px solid transparent",
        borderBottom: "2px solid transparent",
        margin: "auto"        
    },
    arrowBottom:{
        width:0,
        height: 0,
        borderLeft: "2px solid transparent",
        borderRight: "2px solid transparent",
        borderTop: "3px solid white",
        margin: "auto",
    
    },
    screenArea:{
        width: "68%",
        border: "1px solid #333333"
    },
    screenAreaTop:{
        height: "30%",
        backgroundColor: "#666666",
        border: "1px solid "
    },
    screen:{
        width:"65%",
        backgroundColor: "#09AB3F",
        // border: "1px solid #333333",
        height:"100%"
    },




})

export default styles;