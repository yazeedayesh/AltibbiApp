import { Dimensions, StyleSheet  } from 'react-native';

const { width, height } = Dimensions.get('window');

export const wp = (percentage) => width * (percentage / 100);
export const hp = (percentage) => height * (percentage / 100);

export const COLORS = {
  primary: '#007bff',
  secondary: '#6c757d',
  background: '#f8f8f8',
  text: '#333333',
};

export const headerStyles = {
  headerStyle: { backgroundColor: COLORS.background },
  headerTintColor: COLORS.text,
  headerTitleStyle: { fontSize: wp(5), fontWeight: 'bold' },
};

export const tabBarStyles = {
  tabBarLabelStyle: {
    fontSize: wp(4),
    fontWeight: 'bold',
  },
  tabBarStyle: {
    headerTitleAlign: 'center',
    backgroundColor: COLORS.background,
    height: hp(8),
  },
};

export const SHARED_STYLES = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      backgroundColor: COLORS.white,
      borderRadius: 8,
      padding: 16,
      marginBottom: 16,
      shadowColor: COLORS.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      color: COLORS.textPrimary,
    },
    bodyText: {
      fontSize: 16,
      color: COLORS.textPrimary,
      marginBottom: 12,
    },
    metadataText: {
      fontSize: 14,
      color: COLORS.secondary,
    },
});