import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        // backgroundColor: "#454545",
    },
    subContainer: {
        marginTop: 50,
        padding:25,
        // justifyContent: "center",
        // alignItems: "center"
    },
    text: {
        fontSize: 25,
        marginBottom:10,
        fontWeight: '600'
        // color: "#fff",
    },
    subText: {
        fontSize: 17,
        color: "#636363",
    },
    input: {
        width: "90%",
        height: 60,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: "#c9c9c9",
        color: "#000",
        backgroundColor: "#fff",
        borderRadius: 10,
    },
    buttonStyle: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
        borderRadius: 10,
        paddingTop: 10,
        paddingBottom: 10,
        width: "90%",
        elevation: 3,
        margin: 10
    },
    buttonTextStyle: {
        color: "#fff",
        fontSize: 24
    },
    shadowProps: {
        shadowColor: '#000',
        // shadowOffset: { height: 60, width: 100 },
        // shadowOpacity: 0.2,
        // shadowRadius: 0,
    }
});