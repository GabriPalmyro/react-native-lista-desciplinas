import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        paddingTop: 20
    },
    buttonNewDisciplina: {
        width: 60,
        height: 60,
        bottom: 30,
        left: 20,
        position: "absolute",
        backgroundColor: "#492A72",
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonRefresh: {
        width: 60,
        height: 60,
        bottom: 30,
        right: 20,
        position: "absolute",
        backgroundColor: "#492A72",
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconButton: {
        color: "#ffffff",
        fontSize: 25,
        fontWeight: "bold",
    },

    item: {
        padding: 20,
        fontSize: 15,
        marginTop: 5,
    },
    // DISCIPLINA CONTAINER
    containerDisciplina: {
        display: 'flex',
        alignItems: 'flex-start',
        marginHorizontal: 12,
        marginVertical: 12,
        backgroundColor: "#492A72",
        borderRadius: 12,
        paddingVertical: 8,
        paddingHorizontal: 12
    },
    nomeDisciplina: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 28,
        marginBottom: 5
    },
    localDisciplina: {
        color: '#FFFFFF',
        marginBottom: 12
    },
    professorLabel: {
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 20,
        marginBottom: 2
    },
    professorDisciplina: {
        color: '#FFFFFF',
    },
    professorEmail: {
        color: '#FFFFFF',
        fontSize: 12
    },
    deleteDisciplina: {
        width: 40,
        height: 40,
        bottom: 20,
        right: 20,
        position: "absolute",
        backgroundColor: "#9E2A2A",
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    iconButtonDelete: {
        color: "#ffffff",
    },
})

export default styles