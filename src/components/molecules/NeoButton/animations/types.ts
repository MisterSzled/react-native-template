import { StyleSheet } from "react-native"
import { boolean } from "zod"

export interface ButtonAnimationInfo {
        animatedStyle: StyleSheet,
        pressIn?: () => void,
        pressOut?: () => void,
        needsBackdrop: boolean
}