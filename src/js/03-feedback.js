import throttle from 'lodash.throttle';

const feedbackFormRef = document.querySelector('.feedback-form');
const feedbackFormState = {};

const onInput = e => {
  feedbackFormState[e.target.name] = e.target.value;

  localStorage.setItem(
    'feedback-form-state',
    `${JSON.stringify(feedbackFormState)}`
  );
};

const onFormSubmit = e => {
  e.preventDefault();
  feedbackFormRef.reset();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  if (JSON.parse(localStorage.getItem('feedback-form-state'))) {
    localStorage.removeItem('feedback-form-state');
  }
};

feedbackFormRef.addEventListener('input', throttle(onInput, 500));
feedbackFormRef.addEventListener('submit', onFormSubmit);

window.onload = () => {
  const savedFormState = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );

  if (!savedFormState) {
    return;
  }

  if (!savedFormState.email && !savedFormState.message) {
    return;
  }

  if (savedFormState.message) {
    feedbackFormRef.message.value = savedFormState.message;
  }

  if (savedFormState.email) {
    feedbackFormRef.email.value = savedFormState.email;
  }
};
