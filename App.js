import React from "react";
import { SafeAreaView } from "react-native";

import WeatherApp from "./src";

export default function App() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <WeatherApp />
        </SafeAreaView>
    );
}
