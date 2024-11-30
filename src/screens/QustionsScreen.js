import React, { useState, useEffect } from 'react';
import QuestionApi from '../api/QuestionApi';
import { 
  View, 
  Text, 
  FlatList, 
  TouchableOpacity, 
  StyleSheet,
} from 'react-native';

const QustionsScreen = ({ navigation }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const latestQuestions = await QuestionApi.getLatestQuestions();
        setQuestions(latestQuestions);
      } catch (error) {
        console.error('Failed to fetch questions:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, []);

  const renderQuestionItem = ({ item }) => {

    const answerDateAdded = item.answer && item.answer.dateAdded 
      ? new Date(item.answer.dateAdded) 
      : null;
  
    return (
      <TouchableOpacity 
        style={styles.questionContainer}
        onPress={() => {
              {/* Cheack If Data Is Existing Then Change it To String */}
            const answerDateAddedString = answerDateAdded ? answerDateAdded.toISOString() : null;
          navigation.navigate('QuestionDetail', { 
            question: item, 
            answerDateAdded: answerDateAddedString
          });
        }}
      >
        <Text style={styles.questionBody} numberOfLines={10}>
          {item.body || 'No question body available'}
        </Text>
        
        <View style={styles.questionMetadata}>
          <Text style={styles.metadataText}>
            عدد الإجابات: 1
          </Text>
          <Text style={styles.metadataText}>
            {item.formattedDateAdded || 'No date available'}
          </Text>
        </View>
        
        <View style={styles.separator}></View>
  
        <View>
          <Text style={styles.arrow}> عرض الاجابة← </Text>
          <Text style={styles.answerDoctorName}> اجاب على السؤال:{item.answer?.location.name}</Text>
          <Text style={styles.answerDate}>
            {item.answer?.dateAdded ? new Date(item.answer.dateAdded).toLocaleDateString() : 'No date available'}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  if (loading) {
    return null;
  }

  return (
    <FlatList
      data={questions}
      renderItem={renderQuestionItem}
      keyExtractor={(item) => item.questionId.toString() || Math.random().toString()}
      ListEmptyComponent={
        <View style={styles.centered}>
          <Text>No questions found</Text>
        </View>
      }
      showsVerticalScrollIndicator={false} 
    />
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionContainer: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    direction: 'rtl',
  },
  questionBody: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
    textAlign: 'left', 
  },
  questionMetadata: {
    flexDirection: 'row-reverse', 
    justifyContent: 'space-between',
    marginTop: 5,
  },
  metadataText: {
    fontSize: 14,
    color: '#666',
  },
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 10,
  },
  answerContainer: {
    marginTop: 15,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
  },
  arrow: {
    fontSize: 20,
    color: '#4CAF50',
    textAlign: 'right',
  },
  answerText: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  answerDoctorName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#333',
    textAlign: 'left',
  },
  answerDate: {
    fontSize: 12,
    color: '#999',
    textAlign: 'right',
  },
});

export default QustionsScreen;