import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableHighlight, Image } from 'react-native';

const Toast = (props) => {
    if (props.visible) {
        ToastAndroid.showWithGravityAndOffset(
            props.message,
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50,
        );
        return null;
    }
    return null;
};

export default class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            message: 'User Logged In',
            user: { password: '', email: "" }
        }

        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    static navigationOptions = ({ navigation }) => {
        navigation.title = "LoginComponent"
    }
    login() {
        //   loginUser(this.state.user).then(result => {
        //     this.setState({ message: 'User Logged Successfully', visible: true });
        //   }).catch(err => {
        //     this.setState({ message: err.message, visible: true });
        //   });
        this.props.navigation.navigate('ScannerPage');
    }
    handleChange(e, fieldName) {
        let currentState = this.state;
        currentState.user[fieldName] = e.nativeEvent.text;
        this.setState(currentState);
    }

    render() {
        return (

            <View style={styles.container}>
                <Image style={styles.bgImage} source={{ uri: 'https://i.pinimg.com/236x/11/02/6d/11026d6e10cf4b647ffb5631e02f2d2e--tamales-ghana.jpg' }} />
                <TextInput
                    style={styles.input}
                    placeholder='Email/Mobileno'
                    autoCapitalize="none"
                    
                    onChange={(e) => {
                        this.handleChange(e, 'email')
                    }}

                />

                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    autoCapitalize="none"
                    secureTextEntry={true}
                    // placeholderTextColor='blue'
                    onChange={(e) => {
                        this.handleChange(e, 'password')
                    }}
                />
                <Text style={styles.pwd}>Forgot Password?</Text>
                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.login}>
                    <Text style={styles.signUpText}>Login</Text>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]}>
                    <Text style={styles.signUpText} onPress={() => this.props.navigation.navigate('RegisterPage')}>Signup</Text>
                </TouchableHighlight>
                <Toast visible={this.state.visible} message={this.state.message} />

            </View>

        );
    }

}
const styles = StyleSheet.create({
    input: {
        width: 350,
        height: 55,
        backgroundColor: 'white',
        margin: 10,
        padding: 8,
        color: 'black',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '500',
    },

    container: {
        flex: 1,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "orange",
        marginTop:20,
    },
    pwd: {
        color: "white",
        fontSize:25,
        padding:5
    },
    bgImage: {
        flex: 1,
        resizeMode: 'cover',
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    signupButton: {
        backgroundColor: "green",

    },
    signUpText: {
        color: 'black',
        padding:10,
       
        fontSize: 20,
    },


});
