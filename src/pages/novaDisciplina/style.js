import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#ffffff",
        paddingTop: 20
    },
    title: {
        width: "90%",
        marginTop: 5,
        marginBottom: 10,
        fontSize: 28,
        fontWeight: 'bold',
        marginLeft: 20,
        color: "#000000",
    },
    label: {
        width: "90%",
        marginTop: 12,
        fontSize: 16,
        marginLeft: 20,
        color: "#492A72",
    },
    input: {
        width: "90%",
        height: 50,
        marginTop: 5,
        marginBottom: 5,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#492A72",
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: "#492A72",
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    addButton: {
        elevation: 4,
        backgroundColor: "#492A72",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginBottom: 32,
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
})

export default styles