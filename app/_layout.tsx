import { SplashScreen, Stack } from 'expo-router'
import './global.css'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'

import RubikBold from '../assets/fonts/Rubik-Bold.ttf'
import RubikExtraBold from '../assets/fonts/Rubik-ExtraBold.ttf'
import RubikLight from '../assets/fonts/Rubik-Light.ttf'
import RubikMedium from '../assets/fonts/Rubik-Medium.ttf'
import RubikRegular from '../assets/fonts/Rubik-Regular.ttf'
import RubikSemiBold from '../assets/fonts/Rubik-SemiBold.ttf'

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Rubik-Bold': RubikBold,
    'Rubik-ExtraBold': RubikExtraBold,
    'Rubik-Light': RubikLight,
    'Rubik-Medium': RubikMedium,
    'Rubik-Regular': RubikRegular,
    'Rubik-SemiBold': RubikSemiBold,
  })

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync()
  }, [fontsLoaded])

  if (!fontsLoaded) return null

  return <Stack screenOptions={{ headerShown: false }} />
}
