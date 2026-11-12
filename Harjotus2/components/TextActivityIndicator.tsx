import { View, Text, ActivityIndicator} from 'react-native'

enum ActivityIndicatorSize {
  small = 'small',
  large = 'large'
}

interface TextActivityIndicatorProps {
  message: string;
  size?: ActivityIndicatorSize;
  color?: string;
}

export default function TextActivityIndicator({message, size = ActivityIndicatorSize.large, color="#0000ff"}: TextActivityIndicatorProps) {
  return (
    <View>
      <ActivityIndicator
        size={size}
        color={color}
        />

       <Text>{message}</Text>
    </View>
  )
}