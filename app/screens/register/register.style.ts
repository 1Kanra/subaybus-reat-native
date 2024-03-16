import { StyleSheet } from "react-native";

export const registerStyle = StyleSheet.create({
    content: {
        padding: 15,
        paddingTop: 0,
        backgroundColor:"rgb(35,61,255)",
        display:'flex',
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        color : 'rgb(100,100,250)'
    },
    button: {
        margin: 15,
        marginLeft: 0,
        marginRight: 0,
        borderRadius:10
    },
    textInput: {
        backgroundColor:'transparent'
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
        marginTop:3,
        marginBottom:3,
        backgroundColor:'rgba(255,255,255,0.8)',
        height:50
    },
    btn:{
        marginTop:10,
        marginBottom:8,
        backgroundColor:'rgba(255,255,255,0.2)',
        color:'#ffffff'
    }

})