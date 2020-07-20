import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useTranslation} from 'react-i18next';

const {width} = Dimensions.get('window');

const LANGS = [
  {lngCode: 'en', label: 'English'},
  {lngCode: 'hi', label: 'हिन्दी'},
];

const LanguageSelector = () => {
  const {i18n} = useTranslation();
  const selectedLngCode = i18n.language;
  const setLng = (lngCode: string) => i18n.changeLanguage(lngCode);
  return (
    <View style={styles.container}>
      {LANGS.map((l) => {
        const selected = l.lngCode === selectedLngCode;
        return (
          <TouchableOpacity
            onPress={() => setLng(l.lngCode)}
            key={l.lngCode}
            disabled={selected}>
            <View style={[styles.row, selected ? styles.selectedRow : {}]}>
              <Text style={[selected ? styles.selectedText : styles.text]}>
                {l.label}
              </Text>
              {selected && <Text>👍</Text>}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default LanguageSelector;

const styles = StyleSheet.create({
  container: {
    width: width * 0.8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  selectedRow: {
    backgroundColor: 'rgb(45, 45, 45)',
  },
  selectedText: {
    color: 'rgb(231, 232, 235)',
  },
  text: {
    color: 'rgb(45, 45, 45)',
  },
});
