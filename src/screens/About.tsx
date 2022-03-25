import { SafeAreaView, Text, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native";

const About = () => {
    const navigation = useNavigation<any>();
    return (
        <SafeAreaView>
            <Text>About</Text>
            <TouchableOpacity onPress={navigation.openDrawer}>
                <Text>Open Drawer</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default About;