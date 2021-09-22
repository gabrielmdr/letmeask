import { useHistory, useParams } from 'react-router-dom';

import { Button } from '../components/Button';
import { Question } from '../components/Question';
import { RoomCode } from '../components/RoomCode';

import { useRoom } from '../hooks/useRoom';

import { database } from '../services/firebase';

import answerImg from '../assets/images/answer.svg';
import checkImg from '../assets/images/check.svg';
import deleteImg from '../assets/images/delete.svg';
import logoImg from '../assets/images/logo.svg';

import '../styles/room.scss';
import { useTranslation } from 'react-i18next';

type Params = {
  id: string
}

export function AdminRoom() {
  const history = useHistory();
  const params = useParams<Params>();
  const { t } = useTranslation();
  const roomId = params.id;
  const { questions, title } = useRoom(roomId);

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date()
    });

    history.push('/');
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm(t('deleteQuestionPrompt'))) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  async function handleHighlightQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true
    });
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true
    });
  }
  
  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={handleEndRoom}>{t('endRoom')}</Button>
          </div>
        </div>
      </header>
      <main>
        <div className="room-title">
          <h1>{title}</h1>
          { questions.length > 0 && <span>{questions.length} {t('questions')}</span> }
        </div>

        <div className="question-list">
          {
            questions.map((question, index) => {
              return (
                <Question
                  key={index}
                  author={question.author}
                  content={question.content}
                  isAnswered={question.isAnswered}
                  isHighlighted={question.isHighlighted}
                >
                  {
                    !question.isAnswered && (
                      <>
                        <button
                          onClick={() => handleCheckQuestionAsAnswered(question.id)}
                          type="button"
                        >
                          <img src={checkImg} alt={t('markAsAnswered')} />
                        </button>
                        <button
                          onClick={() => handleHighlightQuestion(question.id)}
                          type="button"
                        >
                          <img src={answerImg} alt={t('highlightQuestion')} />
                        </button>
                      </>
                    )
                  }
                  <button
                    onClick={() => handleDeleteQuestion(question.id)}
                    type="button"
                  >
                    <img src={deleteImg} alt={t('deleteQuestion')} />
                  </button>
                </Question>
              );
            })
          }
        </div>
      </main>
    </div>
  );
}