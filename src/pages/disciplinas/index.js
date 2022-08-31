import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, TouchableOpacity, View, FlatList, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style';

export default function Disciplinas({ navigation }) {

    const [isLoading, setLoading] = useState(false);
    const [disciplinas, setDisciplinas] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')

    async function getListDisciplinas() {
        setLoading(true)
        try {
            const response = await axios.get('http://192.168.15.5:4200/disciplinas')
            setDisciplinas(response.data)
            console.log(disciplinas)
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }

    async function deleteDisciplina(idDisciplina) {
        setLoading(true)
        try {
            const response = await axios.post('http://192.168.15.5:4200/disciplinas/delete', {
                Codigo: idDisciplina
            })
            getListDisciplinas()
            setLoading(false)
        } catch (error) {
            alert(response.message)
            console.log(error);
            setLoading(false)
        }
    }

    useEffect(() => {
        getListDisciplinas()
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={disciplinas}
                renderItem={({ item }) =>
                    <View style={styles.containerDisciplina}>
                        <Text style={styles.nomeDisciplina}>{item.Nome}</Text>
                        <Text style={styles.localDisciplina}>{item.Local}</Text>
                        <Text style={styles.professorLabel}>Professor</Text>
                        <Text style={styles.professorDisciplina}>{item.Professor}</Text>
                        <Text style={styles.professorEmail}>{item.ProfessorEmail}</Text>
                        <TouchableOpacity
                            style={styles.deleteDisciplina}
                            onPress={() => { deleteDisciplina(item.id) }}>
                            <Icon name="eraser" size={20} color="#FFFFFF" />
                        </TouchableOpacity>
                    </View>
                }
            />
            <TouchableOpacity
                style={styles.buttonNewDisciplina}
                onPress={() => navigation.navigate("Nova Disciplina")}
            >
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonRefresh}
                onPress={getListDisciplinas}
            >
                <Icon name="refresh" size={20} color="#FFFFFF" />
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View >
    );
}