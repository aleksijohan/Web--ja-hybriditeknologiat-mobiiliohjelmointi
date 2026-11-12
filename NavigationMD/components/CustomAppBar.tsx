import {Appbar} from 'react-native-paper';
import {StackHeaderProps} from '@react-navigation/stack';

export default function CustomBar({navigation, back, options, route}: StackHeaderProps) {

    const title = options.title ?? route.name;

    return (
        <Appbar.Header>
            {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
            <Appbar.Content title={title} />
            {!back ? (
                <Appbar.Action
                    icon = "arrow-right"
                    onPress={() => navigation.navigate('SecondScreen')}
                />
            ) : null}
        </Appbar.Header>
    );
}