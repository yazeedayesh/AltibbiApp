import axios from 'axios';
import QuestionModels from '../models/QuestionModels';

class QuestionApi {
  static BASE_URL = 'https://api-stg.altibb.com';

  static async getLatestQuestions() {
    try {

      const response = await axios.get(`${this.BASE_URL}/active/v1/question/latest?page=1&per-page=10`);

      if (response.data && Array.isArray(response.data)) {

        return response.data.map(item => {

          if (item && item.question_id) {
            return new QuestionModels(item);
          } else {
            console.warn('Invalid item in response data:', item);
            return null;
          }
        }).filter(item => item !== null);
      } else {
        console.warn('Unexpected data format:', response.data);
        return [];
      }
    } catch (error) {
      console.error('Error fetching questions:', error.message);

      if (error.response) {
        console.error('Error response:', error.response.data);
      }
      return [];
    }
  }
}

export default QuestionApi;