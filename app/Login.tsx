import React, {useState} from "react";
import {Button, Pressable, Text, TextInput, View} from "react-native";
import {LoginStyle} from "./Login.style";
import {Link, router} from "expo-router";

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = ():boolean => {
        console.log("authentication::>>",username === "pathik@technogise.com" && password === "Test@123")
        return username === "pathik@technogise.com" && password === "Test@123";
    };

    return (
        <View >
            <Text style={LoginStyle.title}>Login</Text>
            <TextInput
                style={LoginStyle.input}
                placeholder="Username"
                onChangeText={(text) => setUsername(text)}
            />
            <TextInput
                style={LoginStyle.input}
                placeholder="Password"
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
            />
            <Link
                replace
                href="/homeScreen/HomeScreen.tsx">
                Login
            </Link>
            <Pressable onPress={()=>router.push({pathname:"/homeScreen/HomeScreen.tsx"})}>go to home screen</Pressable>
            <Button title="Login" onPress={handleLogin} />

        </View>
    );
}