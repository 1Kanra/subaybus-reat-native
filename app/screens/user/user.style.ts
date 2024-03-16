import { StyleSheet } from "react-native";

export const UserStyle = StyleSheet.create({
    content: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        
        flexDirection: "row",
        backgroundColor:"rgb(255,255,255)"
    },
    card: {
        backgroundColor:'rgb(100,100,250)'
    },
    view: {
        width:'80%',
        justifyContent: "center",
        alignItems: "center",
    },
    logo:{
        marginTop:-50,
        height:250,
        width:250
    },
    view2:{
        width:'100%'
    },
    txtInput:{
        marginTop:10,
        marginBottom:10,
        backgroundColor:'rgba(255,255,255,0.8)'
    },
    btn:{
        marginTop:10,
        marginBottom:8,
        backgroundColor:'rgba(255,255,255,0.2)',
        color:'#ffffff'
    },
    profile:{
        marginTop:30,
        margin:20,
        borderRadius:20,
        height:150,
        backgroundColor:'rgb(35,61,255)',
        padding:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    miniMap:{
        marginTop:40,
        margin:20,
        borderWidth:1,
        borderColor:'rgb(35,61,255)',
        borderRadius:20,
        height:300,
        backgroundColor:'rgba(255,255,255,0.5)',
        padding:10,
        overflow:'hidden'
    },
    fullscreenMap:{
        flex:1,
        height:'100%',
        width:'100%',
        marginTop:'-100%',
        zIndex:3
    },
    fullscreenButton:{
        backgroundColor:'rgba(150,150,150,0.7)',
        zIndex:222,
        width:30,
        height:30        
    },
    fullscreenButtonContainer:{
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    zoomButtonContainer:{
        position:'absolute',
        top: 10,
        right: 10
    },
    logos:{
        width:80,
        height:80,
        backgroundColor:'rgba(255,255,255,0.2)',
        borderRadius:40,
        textAlign:'center',
        lineHeight:80,
        fontWeight:'bold',
        fontSize:50,
        fontFamily:'cochin',
        marginLeft:0
    },
    logosNex:{
        marginLeft:10,
        fontSize:20
    }

})