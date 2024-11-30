class QuestionModels {
  constructor(data) {

    this.questionId = data.question_id;
    this.body = data.body;
    this.adultContent = data.adult_content;
    
    this.subCategory = {
      id: data.subCategory?.sub_category_id || null,
      name: data.subCategory?.name || null,
    };
    
    this.answersCount = data.answers_count || 0;
    
    this.dateAdded = data.date_added ? new Date(data.date_added).toISOString() : null;
    
    this.answer = data.answer
      ? {
        answerId: data.answer && data.answer.answer_id ? data.answer.answer_id : 'غير متوفر',
        body: data.answer && data.answer.answer_body ? data.answer.answer_body : 'غير متوفرا حاليا',        
          dateAdded: new Date(data.answer.date_added).toISOString(),
          location: {
            memberId: data.answer.location?.member_id || null,
            avatar: data.answer.location?.avatar || '',
            name: data.answer.location?.name ? data.answer.location.name.replace(/^د\./, '') : 'غير متوفر',
            gender: data.answer.location?.gender || 'غير متوفر',
          },
        }
      : null;
      
    this.member = {
      age: data.member?.age || null,
      gender: data.member?.gender || 'غير متوفر',
    };

    this.tags = data.tags || [];
  }

  formatDate(date) {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  get formattedDateAdded() {
    return this.dateAdded ? this.formatDate(new Date(this.dateAdded)) : 'غير متوفر';
  }
}

export default QuestionModels;