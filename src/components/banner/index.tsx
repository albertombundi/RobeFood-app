import { View } from 'react-native';
import PagerView from 'react-native-pager-view';




export function Banner() {
  return (
    <View className='w-full h-36 rounded-2xl mt-5 mb-4'>
      <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={14}>
      
      </PagerView>
    </View>
  );
}