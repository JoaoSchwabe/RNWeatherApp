import React, { useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from "react-native";
import axios from "axios";

import Header from "./components/Header";

export default function WeatherApp() {
    const [cidade, setCidade] = useState();
    const [temperatura, setTemperatura] = useState(0);
    const [sensTerm, setSensTerm] = useState(0);
    const [dataCity, setDataCity] = useState("");

    function getData(cidade) {
        let data;
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&units=metric&appid=269808af0f6f766ca78807b59b6a9d0f`
            )
            .then((response) => {
                data = response.data;
                setTemperatura(data.main.temp);
                setSensTerm(data.main.feels_like);
                setDataCity(data.name);
                console.log(data);
            });
    }

    function handleCidade() {
        if (cidade.slice(-1) == " ") {
            let cidadeSemEspaco = cidade.substring(0, cidade.length - 1);
            setCidade(cidadeSemEspaco);
            getData(cidadeSemEspaco);
        } else {
            getData(cidade);
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <Header />
            <View style={styles.containerInText}>
                <TextInput
                    style={styles.input}
                    placeholder="Informe a cidade aqui!"
                    value={cidade}
                    onChangeText={(text) => setCidade(text)}
                    type="text"
                />
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => handleCidade()}
                >
                    <Text style={styles.btnTxt}>Consultar clima</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Cidade: {dataCity}</Text>
                <Text style={styles.text}>
                    Temperatura: {parseInt(temperatura)}°C
                </Text>
                <Text style={styles.text}>
                    Sensação térmica: {parseInt(sensTerm)}°C
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        paddingTop: 20,
        color: "black",
        fontSize: 28,
    },
    textContainer: {
        alignItems: "center",
    },
    input: {
        backgroundColor: "white",
        height: 50,
        width: "80%",
        borderRadius: 10,
        marginTop: 20,
        paddingLeft: 20,
        fontSize: 20,
    },
    btn: {
        backgroundColor: "#B0D3E9",
        height: 50,
        width: "80%",
        borderRadius: 10,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    btnTxt: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 22,
    },
    containerInText: {
        alignItems: "center",
    },
});
