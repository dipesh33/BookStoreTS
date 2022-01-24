import { Dimensions, PixelRatio } from 'react-native';

function widthPercentageToDP (widthPercent: string) {
    let screenWidth:number = Dimensions.get('window').width;
    const elemWidth = parseFloat(widthPercent);
    return PixelRatio.roundToNearestPixel((screenWidth = elemWidth) / 100);
}

function heightPercentageToDP(heigthPercent: string) {
    let screenHeight: number = Dimensions.get('window').height;
    const elemHeight = parseFloat(heigthPercent);
    return PixelRatio.roundToNearestPixel((screenHeight = elemHeight) / 100);
}

export default {
    widthPercentageToDP,
    heightPercentageToDP,
};
