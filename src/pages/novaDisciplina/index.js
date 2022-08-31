import { ScrollView, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';
import styles from './style'

export default function NovaDisciplina({ navigation }) {

    const [nome, setnome] = useState('')
    const [local, setlocal] = useState('')
    const [criterios, setcriterios] = useState('')
    const [conteudo, setconteudo] = useState('')
    const [cargaHoraria, setcargaHoraria] = useState('')
    const [professor, setprofessor] = useState('')
    const [professorEmail, setprofessorEmail] = useState('')

    const Separator = () => (
        <View style={styles.separator} />
    );


    async function addNewDisciplina({ navigation }) {
        var myHeaders = new Headers();

        myHeaders.append('Content-Type', 'application/json');

        fetch('http://192.168.15.5:4200/disciplinas/create', {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({
                "nome": nome,
                "local": local,
                "criterios": criterios,
                "conteudo": conteudo,
                "cargaHoraria": cargaHoraria,
                "professor": professor,
                "professorEmail": professorEmail
            }),
        }).then((response) => {
            console.log('Sucess', response.body)
            navigation.navigate("Disciplinas")
        }).catch((error) => console.log('Error', error));

        // axios
        //     .post('http://192.168.15.5:4200/disciplinas/create', {
        //         "nome": nome,
        //         "local": local,
        //         "criterios": criterios,
        //         "conteudo": conteudo,
        //         "cargaHoraria": cargaHoraria,
        //         "professor": professor,
        //         "professorEmail": professorEmail
        //     }).then((response) => {
        //         console.log('Sucess', response)
        //         navigation.navigate("Disciplinas")
        //     }).catch((error) => console.log('Error', error));
    }


    const getCircularReplacer = () => {
        const seen = new WeakSet();
        return (key, value) => {
            if (typeof value === "object" && value !== null) {
                if (seen.has(value)) {
                    return;
                }
                seen.add(value);
            }
            return value;
        };
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Adicionar disciplina</Text>
                <Text style={styles.label}>Nome</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nome da Disciplina"
                    onChangeText={text => setnome(text)}
                    value={nome} />
                <Separator />
                <Text style={styles.label}>Local</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Local"
                    onChangeText={text => setlocal(text)}
                    value={local} />
                <Separator />
                <Text style={styles.label}>Conteúdo</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Conteúdo"
                    onChangeText={text => setconteudo(text)}
                    value={conteudo} />
                <Separator />
                <Text style={styles.label}>Critérios</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Critérios"
                    onChangeText={text => setcriterios(text)}
                    value={criterios} />
                <Separator />
                <Text style={styles.label}>Carga Horária</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Carga Horária"
                    onChangeText={text => setcargaHoraria(text)}
                    value={cargaHoraria} />
                <Separator />
                <Text style={styles.label}>Professor</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do Professor"
                    onChangeText={text => setprofessor(text)}
                    value={professor} />
                <Separator />
                <Text style={styles.label}>E-mail Professor</Text>
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    onChangeText={text => setprofessorEmail(text)}
                    value={professorEmail} />
                <Separator />
                <TouchableOpacity
                    // title="Adicionar Disciplina"
                    style={styles.addButton}
                    onPress={addNewDisciplina}
                ><Text
                    style={styles.appButtonText}>Adicionar Disciplina</Text></TouchableOpacity>
            </View>
        </ScrollView >
    )
}