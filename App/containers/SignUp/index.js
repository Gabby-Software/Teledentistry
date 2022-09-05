import * as React from 'react';
import {
    SafeAreaView,
    Image,
    View,
    Text
  } from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AuthInput from '../../components/AuthInput';
import LinkButton from '../../components/LinkButton';
import OutlineButton from '../../components/OutlineButton';
import Images from '../../utils/Images';
import {styles} from './styles';

const SignUpScreen = ({ navigation }) => {
    const [userName, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");
    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView style={{flex: 1}} contentContainerStyle={{flex: 1}}>
                <View style={styles.containerInner}>
                    <Image            
                        source={Images.ic_logo}
                        style={styles.logo}
                        resizeMode={'contain'}
                    />
                    <Text style={styles.greetingText}>
                        Create a new account.
                    </Text>
                    <View style={styles.inputForm}>
                        <AuthInput
                            placeholder='Username'
                            icon={Images.ic_user_simple}
                            value={userName}
                            onChangeText={(v) => setUserName(v)}
                            borderType={"roundTop"}
                        />
                        <AuthInput
                            placeholder='Password'
                            icon={Images.ic_edit}
                            value={password}
                            onChangeText={(v) => setPassword(v)}
                            borderType={"roundBottom"}
                        />
                    </View>
                    <View style={styles.loginWrapper}>
                        <OutlineButton
                            title="Create account"
                            onPress={() => {}}
                        />
                    </View>
                    <View style={styles.noteWrapper}>
                        <Text style={styles.noteText}>Already have an account? </Text>
                        <LinkButton
                            title="Log in here."
                            onPress={() => {
                                navigation.navigate("SignIn");
                            }}
                        />
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
};

export default SignUpScreen;