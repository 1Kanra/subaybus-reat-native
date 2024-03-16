import { StyleSheet } from "react-native";

export const loginStyle = StyleSheet.create({
    content: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor:"rgb(35,61,255)"
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
    }

})