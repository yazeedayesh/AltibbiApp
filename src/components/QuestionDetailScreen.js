import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const QuestionDetailScreen = ({ route }) => {
  const { question } = route.params;
  const answerDate = question.answer?.dateAdded ? new Date(question.answer.dateAdded) : null;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.detailContainer}>
        <View style={styles.questionSection}>
          <Text style={styles.questionTitle}>السؤال:</Text>
          <Text style={styles.questionDetailBody}>{question.body}</Text>
          <View style={styles.questionDetailMetadata}>
            <Text style={styles.metadataText}>
              منذ: {question.formattedDateAdded}
            </Text>
            <Text style={styles.metadataText}>
              في {question.subCategory.name}
            </Text>
          </View>
        </View>

        {question.answer && (
          <View style={styles.answerSection}>
            <View style={styles.answerContent}>
              <Text style={styles.answerBody}>{question.answer.body}</Text>
              <View style={styles.answerMetadata}>
                <Text style={styles.metadataText}>
                  اجاب السؤال: {question.answer.location.name}
                </Text>
                <Text style={styles.metadataText}>
                  {/* Cheack If Data Is Existing Then Change it To String */}
                  منذ: {answerDate ? answerDate.toLocaleDateString() : 'No date available'}
                </Text>
              </View>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  detailContainer: {
    padding: 16,
  },
  questionSection: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  questionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'right',
  },
  questionDetailBody: {
    fontSize: 16,
    color: '#333',
    marginBottom: 12,
    textAlign: 'right',
  },
  questionDetailMetadata: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  answerSection: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  answerHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2c3e50',
  },
  answerContent: {
    marginTop: 8,
  },
  answerBody: {
    fontSize: 16,
    color: '#333',
    marginBottom: 12,
    textAlign: 'right',
  },
  answerMetadata: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  metadataText: {
    fontSize: 14,
    color: '#7f8c8d',
    textAlign: 'left',
  },
});

export default QuestionDetailScreen;