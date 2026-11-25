import {Text, StyleSheet, Pressable } from 'react-native'
import { Task } from '../types/Types'

interface TodoRowProps {
    item: Task
    onToggle: (id: number) => void
}

export default function TodoRow({ item, onToggle }: TodoRowProps) {
    return (
        <Pressable onPress={() => onToggle(item.id)} style={styles.row}>
            <Text key={item.completed ? 'done' : 'notdone'}
            style={[styles.text, item.completed && styles.completed]}>
                {item.text}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 4,
        marginBottom: 4,
        margin: 4,
        borderRadius: 4,
        borderColor: '#ccc',
        borderWidth: 1,
    },
    text: {
        fontSize: 16,
        marginLeft: 10,
    },
    completed: {
        textDecorationLine: 'line-through',
    },
});