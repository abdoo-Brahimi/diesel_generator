const getGray = (number) => "#"+number+number+number
const hingScale = (scale) => `${scale}+vw`
 const styles= theme => ({
    root:{
        felxGrow: 1
    },
    container:{
        // width: "30vw",
        border: "1px solid black",
        // maxWidth: "600px",
        // height: "20vw",
        width: "400px",
        height: "250px",
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
        paddingTop: "19px",
        paddingBottom:"19px", 
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
        height:"25%",
        marginTop:"10%"
    },
    doorHandle:{
        backgroundColor: "black",
        width: "25%",
        height: "50%",
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
        borderRadius: "40%",
    },
    separatorArea:{
        width: "6%",
        border: "1px solid black"
    },
    rightArea:{
        width: "35%",
        border:"1px solid black"
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
    }
})

export default styles;